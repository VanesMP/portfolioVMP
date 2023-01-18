import React from "react";
import "../Styles/header.css";
import Name from "./Name";
import Navbar from "./Navbar";

function Header () {
    return(
        <div className="header">
            <Name />
            <Navbar />
        </div>
    )
};

export default Header;