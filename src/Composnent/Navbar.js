import React from "react";
import "../Styles/navBar.css";

function Navbar () {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>PROJECTS</li>
                    <li>ABOUT</li>
                    <li>C.V</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;