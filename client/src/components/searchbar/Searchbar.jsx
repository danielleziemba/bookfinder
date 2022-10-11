import { useState } from "react"
import "./searchbar.css"

const Searchbar = (props) => {
    const [searchData, setSearchData] = useState("");

    const handleChange = (e) => {
        setSearchData(e.target.value)
    }

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
            >
                <div className="controls">
                    <input 
                        type="text" 
                        value={searchData}
                        name="s"
                        id="s"
                        onChange={handleChange}
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