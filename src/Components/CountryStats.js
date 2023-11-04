import { useState } from "react";
import CountryStatRow from "./CountryStatRow";



const CountryStats = ({data, totalPopulation}) => {

  const [flag, setFlag] = useState(true)
 

const sortedPopulation = [...data]; 
sortedPopulation.sort((a, b) => b.population - a.population).splice(10, sortedPopulation.length);

let languagesList = [];

data.forEach(country => {
  for (const key in country.languages) {
    if (country.languages.hasOwnProperty(key)) {
      const language = country.languages[key];
      const existingLanguage = languagesList.find(el => 
        el.language === language);

      if (existingLanguage) {
        existingLanguage.occurrences += 1;
      } else {
        languagesList.push({ language, occurrences: 1 });
      }
    }
  }
});


languagesList.sort((a, b) => b.occurrences - a.occurrences).splice(10,languagesList.length);



 


return (
  <div className="country-stats" id="country-stats">
    <div className="btns">
      <button onClick={() => {setFlag(true)}}>Population</button>      
      <button onClick={() => {setFlag(false)}}>Languages</button>
    </div>

    <div className="top-10">
      { flag ? 
      (
      <div className="top-10-pop">
        <h1>Top 10 Populations</h1>
        <CountryStatRow
        name={"World's Population"}
        value={totalPopulation}
        percent={100}
        />
        {
        sortedPopulation.map((country) => (
        <CountryStatRow
        key={country.name.common}
        name={country.name.common}
        value={country.population.toLocaleString()}
        percent={100*country.population / totalPopulation}
        />
        ))
        }  
      </div>
      ) : (
      <div className="top-10-lang">
        <h1>Top 10 Languages</h1>
        {
        languagesList.map((language) =>(
        <CountryStatRow
        key={language.occurrences}
        name={language.language}
        value={language.occurrences}
        percent={language.occurrences}
        />
        ))
        } 
      </div>
      )}
  </div>
  </div>
  );
};



export default CountryStats;