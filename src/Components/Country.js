import axios from 'axios';
import { useEffect, useState } from 'react';



const Country = () => {

    return (
      <div className="country" title="This country is ...">
        <div className="flag">
          <img src="" alt="" />
        </div>
          <div className="info">
          <h3>AFGHANISTAN</h3>
          <p><span>Capital:</span> Kabul</p>
          <p><span>Languages:</span> Pashto, Uzbek, Turkmen</p>
          <p><span>Population:</span> 40,218,234</p>
          <p><span>Currency:</span> X</p>
        </div>
      </div>
    );
}
 
export default Country;


{/* <div className="flag">
    <img src="" alt="" />
</div>
<div className="info">
    <h3>AFGHANISTAN</h3>
    <br />
    <p>Capital: Kabul</p>
    <p>Languages: Pashto, Uzbek, Turkmen</p>
    <p> Population: 40,218,234</p>
    <p>Currency:</p>

</div> */}