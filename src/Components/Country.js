import { useState } from "react";

const Country = ({country, languages}) => {

  const [lang, setLang] = useState([])
  


  return (
    <div className="country" title={country.alt}>
      <div className="flag">
        <img src={country.flags.png} alt="" />
      </div>
      <div className="info">
        <h3>{country.name.common}</h3>
        <p><span>Capital : </span>{country.capital}</p>
        {/* <p><span>Languages : </span>{languages}</p> */}
        <p><span>Population : </span>{country.population} </p>
        {/* <p><span>Currency : {country.currencies}</span></p> */}
        
      </div>
    </div>
  );
};

export default Country;

