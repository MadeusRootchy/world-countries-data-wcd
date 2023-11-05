import CountryList from './Components/CountryList';
import {RiTwitterXFill} from 'react-icons/ri';
import {ImStatsDots} from 'react-icons/im';
import {SiGooglehome} from 'react-icons/si';

const App = () => {
  return (
    <>    
    <header>
    <nav>
        <a href="#country-stats"><ImStatsDots/></a>
        <a href="#search"><SiGooglehome/></a>
    </nav>
    </header>
    <div className="App">
      <CountryList />
    </div>
    <footer>
    <nav>
        <ul>
            <li><a href="#search">Search</a></li>
            <li><a href="#country-stats">Stats</a></li>
        </ul>
    </nav>
    <p>&copy; 2023 </p>
    <nav>
      <p><span><RiTwitterXFill/></span> Rootchy </p>
      <p><span><RiTwitterXFill/></span> Roos </p>
    </nav>
    </footer>

    </>

  );
}

export default App;
