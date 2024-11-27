
import useDebounce from "../Hooks/useDebounce";
import "./Search.css"

function Search({updateSearchTerm}){
    const debounceCallBack = useDebounce((e) => updateSearchTerm(e.target.value));
    return(
        <div className="search-wrapper">
            <input
                id="pokemon-name-search"
                type="text"
                placeholder="Pokemon Name...."
                onChange={ debounceCallBack}
            >
            </input>
        </div>
    )
    
}

export default Search;