import useFetch from "../useFetch";

const Search = () => {
    
    const handleSearch = () => {
        
        console.log('Searching...')
    } 

    return (
        <div className="search">
            <form onSubmit={() => {handleSearch()}}>
                <input type="text" placeholder="Search country by name, city or languages..."/>
                <button>Search</button>
            </form>
        </div>
    );
}
 
export default Search;