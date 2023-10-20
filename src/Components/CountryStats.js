import { useEffect, useState } from "react";



const CountryStats = ({data}) => {

  const [flag, setFlag] = useState(true)

  let populationArrray = [];

  data.map(country =>(    
  populationArrray.push(country.population)
      ));

  const  totalPopulation = populationArrray
  .reduce((acc,population) =>acc + population,0);

    

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
      {flag ? (<div className="top-10-pop">
        <h1>Top 10 Populations</h1>
        <p><span>World's Population : </span> {totalPopulation.toLocaleString()} x.</p>
          {
            sortedPopulation.map((country) => (
            <div key={country.name.common}>
              <p><span>{country.name.common} : </span>{country.population.toLocaleString()} x.</p>
            </div>
            ))
          }  
      </div>
          ) : (
        <div className="top-10-lang">
            <h1>Top 10 Languages</h1>
            {
              languagesList.map((language) =>(
              <div key={language.occurrences}>
                <p><span>{language.language} : </span> {language.occurrences}  countries.</p>
              </div>
              ))
            } 
        </div>
        )}
  </div>
  </div>
  );
};



export default CountryStats;