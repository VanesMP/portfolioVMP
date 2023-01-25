import React from "react";
import "../Styles/navBar.css";

function Navbar ({ ancreProjet }) {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li>HOME</li>
                    <a href={ancreProjet}><li>PROJECTS</li></a>
                    <li>ABOUT</li>
                    <li>C.V</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;