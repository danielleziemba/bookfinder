import { useContext, useState } from "react"
import "./searchbar.css"
import { SearchContext } from "../../context/search-context";

const Searchbar = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const searchContext = useContext(SearchContext);

    const searchQueryHandler = () => {
        searchContext.searchHandler(searchQuery);
    };

  return (
    <div 
        id="search-bar"
        className={props.showing ? "showing" : null}
    >
        <div className="whiteout-bar"></div>
        <div className="container">
            <form 
                role="search"
                id="searchform"
                className="searchform"
                onSubmit={searchQueryHandler}
            >
                <div className="controls">
                    <input 
                        placeholder="Search"
                        type="text" 
                        name="s"
                        id="s"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <input 
                        type="submit" 
                        id="searchsubmit"
                        value="Search"
                    />
                </div>
            </form>
        </div>
        <div
            onClick={props.handleClose} 
            className="navigation-close-button search-close-button"
        ></div>
    </div>
  )
}

export default Searchbar