import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navBar.css";
import CV from "../assets/DevelopperCV.pdf";

function Navbar ({ navig, pathAncre }) {

    return (
        <div className={navig}>
            <nav>
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
            </nav>
        </div>
    )
};

export default Navbar;