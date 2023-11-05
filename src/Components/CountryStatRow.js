

const CountryStatRow = ({name, value, percent}) => {
    return (
        <div className="country-stat-row">
          <div><h3>{name}</h3><span>{value} x.</span></div> 
          <div className="progress-bar">
            <progress
            value = {percent} 
            max = {100}>
            </progress>
          </div>
        </div>

    );
}
 
export default CountryStatRow;