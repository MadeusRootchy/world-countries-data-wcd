import React from "react";


const CountryStats = ({data}) => {
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
  <div className="country-stats">
    <button className="button">Population</button>      
    <button className="button">Languages</button>

    <div className="country-top10-population">
      <h1>Total World's Population: {totalPopulation}</h1>
      {sortedPopulation.map((country) => (
      <div key={country.name.common}>
        <h2>{country.name.common}</h2>
        <p>{country.name.common}: {country.population}</p>
      </div>
      ))}
    </div>
    <div className="country-top10-languages">
        <h1>Top 10 Languages</h1>
        {languagesList.map((language) =>(
          <div key={language.occurrences}>
            <p>{language.language} : {language.occurrences}</p>
          </div>
        ))} 
    </div>
  </div>
);
};



export default CountryStats;