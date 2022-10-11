import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/logo-small.png"
import { useEffect, useState } from "react";
import Searchbar from "../searchbar/Searchbar";

const Navbar = () => {
    const [showing, setShowing] = useState(false);

    const handleOpen = () => {
        setShowing(true);
    }

    const handleClose = () => {
        setShowing(false);
    } 

  return (
    <div className="main-nav">
        <div className="button-logo">
            {/* <div className="menu-nav-button nav-corner-box nav-corner-left">
                <div className="tooltip-content">Menu</div>
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
            </div> */}
            <div className="logo">
                <a itemProp="url" href="https://bookriot.com">
                    <img src={logo} alt="Hometown Brew logo" />
                </a>
            </div>
        </div>

        <div className="nav-content-right">
            <div className="search-button nav-corner-box nav-corner-right">
                <FontAwesomeIcon 
                    icon={faMagnifyingGlass} 
                    className="header-icon" 
                    onClick={handleOpen}
                />
            </div>
        </div>

        <Searchbar showing={showing} handleClose={handleClose} />

        <div className="genre-nav">
            <ul className="menu-masthead-1">
                <li className="nav-newsletters menu-item">
                    Login
                </li>
                <li className="nav-podcasts menu-item">
                    Register
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar