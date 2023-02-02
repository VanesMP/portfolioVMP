import React from "react";
import "../Styles/header.css";
import Navbar from "./Navbar";

function Header({ fixPosition, nameprop, jobprop, idTextclass, seeProject }) {

    return(
        <div>
            <div className="banner" id={fixPosition}>
                <div className="containerName" >
                    <h1 className= {nameprop} >Vanessa Macedo Pinto</h1>
                    <h2 className={jobprop} id={idTextclass}>Développeuse Frontend Junior</h2>
                </div>
                <Navbar pathAncre={seeProject} />
            </div>
        </div>
    )
};

export default Header;