import { useEffect, useState } from "react";
import axios from 'axios';
import {ImStatsDots} from 'react-icons/im';
import {SiGooglehome} from 'react-icons/si';
import Country from './Country';
import CountryStats from "./CountryStats";

const CountryList = () => {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);
    const [matchCount, setMatchCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [entry, setEntry] = useState('')

    useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(res => {
        setData(res.data);    
        setNewData(res.data) 
        setIsLoading(false);
    })
    .catch(err => {
        setError(true);
        setIsLoading(false);
    })
    }, []);

    useEffect(() => {
        const filteredData = data.filter((obj) => {
            if(entry.length > 0){
                // by name 
                if(obj.name.common.toLowerCase().startsWith(entry[0].toLowerCase())){
                    if(obj.name.common.toLowerCase().includes(entry.toLowerCase())){
                        return obj
                    }
                }
                // by languages
                for(let key in obj.languages){
                    if(obj.languages.hasOwnProperty(key)){
                        if(obj.languages[key].toLowerCase().startsWith(entry[0].toLowerCase())){
                            if(obj.languages[key].toLowerCase().includes(entry.toLowerCase())){
                                return obj
                            }
                        }
                    }
                }
                // by city
                for(let [key, value] in obj.capital){
                    if(obj.capital[key].toLowerCase().startsWith(entry[0].toLowerCase())){
                        if(obj.capital[key].toLowerCase().includes(entry.toLowerCase())){
                            return obj
                        }
                    }

                }

            }
            else{
                return obj
            }

        })
        setMatchCount(filteredData.length)
        setNewData(filteredData.sort())
    }, [entry.length])


    
    let populationTotal = [];

    data.map(country =>(    
    populationTotal.push(country.population)
    ));

    const  totalPopulation = populationTotal
    .reduce((acc,population) => acc + population,0);  
    

    return (
        <div>
            <div className="search" id="search">
                <div className="banner">
                    <h2>Countries of the world</h2>
                    <p>From {data.length} countries</p>
                    { entry.length > 0 && <h3>{matchCount} match-es found </h3>}
                </div>
                <form>
                    <input 
                    type="text" 
                    placeholder="Search country by name, city or languages..." 
                    value={entry}
                    onChange={(e)=>setEntry(e.target.value)}
                    />
                </form>
            </div>
            <div className="anchor">
                <a href="#country-stats">
                 <ImStatsDots />
                </a>
            </div>

            <div className="country-list">
                {
                    newData.map((country) => (
                        <Country 
                        country={country} 
                        key={country.cca2}  
                        languages={country.languages}
                        currencies={country.currencies}
                        />
                    ))
                }
            </div>
            
            <div className="anchor">
                <a href="#search">
                 <SiGooglehome />
                </a>
            </div>
            <div>
            {
                <CountryStats 
                data = {newData} 
                totalPopulation={totalPopulation}
                />
            }
            </div>

        </div>
    );

};
 
export default CountryList;
