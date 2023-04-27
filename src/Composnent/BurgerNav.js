import React from "react";
import { Link } from "react-router-dom";
import CV from "../assets/DevelopperCV.pdf";


function BurgerNav({ pathAncre }) {

    return(
        <div>
            <div class="menu-bg"></div>
            <div class="menu-burger">☰</div>
            <div class="menu-items">
            <ul>
                    <Link to="/">
                        <li>HOME</li>
                    </Link>
                    <a href={pathAncre}><li>PROJECTS</li></a>
                    {/* <Link to="/about">
                        <li>ABOUT</li>
                    </Link> */}
                    <a href={CV} target="_blank" rel="noopener noreferrer" ><li>C.V</li></a>
                    <Link to="/contact">
                        <li>CONTACT</li>
                    </Link>
                </ul>
</div>
        </div>
    )
};

export default BurgerNav;