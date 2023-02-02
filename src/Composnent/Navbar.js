import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navBar.css";

function Navbar ({ navig, pathAncre }) {

    return (
        <div className={navig}>
            <nav>
                <ul>
                    <Link to="/">
                        <li>HOME</li>
                    </Link>
                    <a href={pathAncre}><li>PROJECTS</li></a>
                    <li>ABOUT</li>
                    <li>C.V</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;