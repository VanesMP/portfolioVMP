import React from "react";
import "../Styles/header.css";
import BurgerNav from "./BurgerNav";
import Navbar from "./Navbar";

function Header({ fixPosition, idTextclass, seeProject, classNavig, classNavigBurger }) {

    return(
        <div id="ancreMenu">
            <div className="banner" id={fixPosition}>
                <div className="containerName" >
                    <h1 className= "name" >Vanessa Macedo Pinto</h1>
                    <h2 className="job" id={idTextclass}>Développeuse Frontend Junior</h2>
                </div>
                <Navbar pathAncre={seeProject} navig={classNavig}/>
                <BurgerNav pathAncre={seeProject} navig={classNavigBurger}/>
            </div>
        </div>
    )
};

export default Header;