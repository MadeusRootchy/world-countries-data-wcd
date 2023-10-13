import Country from "./Country";
import useFetch from "../useFetch";

const CountryList = ({country}) => {

    const url = 'https://restcountries.com/v3.1/all';
    const { data, isLoading, error } = useFetch(url); 

    console.log(data)
    return (
        !isLoading ? (
            <div className="country-list">
                {
                    data.map((country) => (
                        <Country 
                        country={country} 
                        key={country.cca2}  
                        languages={country.languages}
                        currencies={country.currencies}
                        />
                    ))
                }
            </div>
        ) : <p>Loading...</p>
    );
}
 
export default CountryList;