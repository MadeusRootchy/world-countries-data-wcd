import { useState } from "react";

const Country = ({country, languages, currencies}) => {

  const lang = [];
  const currency = [];

  for (const key in languages) {
    if (languages.hasOwnProperty(key)) {
      lang.push(languages[key]);
    }
  }

  for (const key in currencies) {
    if (currencies.hasOwnProperty(key)) {
      currency.push(currencies[key]);
    }
  }


  return (
    <div className="country" key={country.cca2}>
      <div className="flag">
        <img src={country.flags.png} alt=""/>
      </div>
      <div className="info">
        <h2 className="country-name">{country.name.common}</h2>
        <p><span>Capital : </span>{country.capital}</p>
        <p><span>Language(s) : </span>
        {
          lang.map(l => { return <i>{`${l}.  `}</i>})
        }
        </p>
        <p><span>Population : </span>{country.population.toLocaleString()}  hab.</p>
        <p><span>Currency(cies) : </span>
        {
          currency.map(c => { return <i>{`${c.name} (${c.symbol})`}</i>})
        }
        </p>
      </div>
    </div>
  );
};

export default Country;

