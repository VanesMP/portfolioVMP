import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navBar.css";
import CV from "../assets/cvDevelopperJr.pdf";

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
                    <a href={CV}><li>C.V</li></a>
                    <Link to="/contact">
                        <li>CONTACT</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;