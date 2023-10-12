import React from "react";
import useFetch from "../UseFetch";
const Country = () => {
  const url = 'https://restcountries.com/v3.1/all';
  const { data, isLoading, error } = useFetch({ url }); 

  const commonName = (data) => {
    return data.name.common;
  };

  console.log(commonName);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Fatal error .</p>;
  }

  return (
    
    <div className="country" title="This country is ...">
      <div className="flag">
        <img src="" alt="" />
      </div>
      <div className="info">
        <h3><span>Name:</span>{data[0]?.name.common}</h3>
        <p><span>Capital:</span>{data[0]?.capital}</p>
        <p><span>Languages:</span> {data[0]?.languages.fra}</p>
        {/* <p><span>Pupulation:</span>{data[0]?.population}</p> */}
        <p><span>Currency:</span> {data[0]?.currencies.XPF.name} {data[0]?.currencies.XPF.symbol}</p>
        
      </div>
    </div>
  );
};

export default Country;
