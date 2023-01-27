import React from "react";
import { Link } from "react-router-dom"
import "../Styles/navBar.css";

function Navbar ({ ancreProjet }) {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <Link to="/">
                        <li>HOME</li>
                    </Link>
                    <Link to="/project">
                        <a href={ancreProjet}><li>PROJECTS</li></a>
                    </Link>
                    <li>ABOUT</li>
                    <li>C.V</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;