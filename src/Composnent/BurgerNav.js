import React, {useState} from "react";
// import $ from 'jquery';
import { Link } from "react-router-dom";
import CV from "../assets/DevelopperCV.pdf";
import "../Styles/navBar.css";
import "../Styles/menuBurger.css"


function BurgerNav({ pathAncre, navig }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };


    return(
        <div className={navig}>
            <div className={`menuBg ${isMenuOpen ? 'fs' : ''}`}></div>
            <div className={`menuBurger ${isMenuOpen ? 'fs' : ''}`} onClick={handleMenuClick}>
                {isMenuOpen ? "✕" : "☰"}
            </div>
            <div className={`menuItems ${isMenuOpen ? 'fs' : ''}`} >
                    <Link to="/" >
                        <div className="list" onClick={handleMenuClick}>HOME</div>
                    </Link>
                    <a href={pathAncre} ><div className="list" onClick={handleMenuClick}>PROJECTS</div></a>
                    {/* <Link to="/about">
                        <li>ABOUT</li>
                    </Link> */}
                    <a href={CV} target="_blank" rel="noopener noreferrer" ><div className="list" onClick={handleMenuClick}>C.V</div></a>
                    <Link to="/contact">
                        <div className="list">CONTACT</div>
                    </Link> 
            </div>
        </div>
    )
};

export default BurgerNav;