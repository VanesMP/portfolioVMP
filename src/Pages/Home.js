import React from "react";
import arrowDown from "../assets/arrowDown.svg";
import arrowUp from "../assets/ArrowUp.svg";
import Background from "../Composnent/Background";
import Footer from "../Composnent/Footerr";
import Identity from "../Composnent/Identity";
import Name from "../Composnent/Name";
import Navbar from "../Composnent/Navbar";
import Gallery from "../Composnent/Gallery";
import "../Styles/homePage.css";

function Home() {
    return(
        <div>
            <Background />
            <div>
            <Identity />
            <a href="#project"><img src={arrowDown} alt="arrow to check directly all the projects"  className="arrow" /></a>
            <div className="containerPresentation">
                <div className="upPageProjects" id="project"></div>
                <Gallery />
            <a href="#ancreMenu"><img src={arrowUp} alt="arrow to get back" className="arrowUp" /></a>
            </div>
            </div>
            <div className="headerPage" id="ancreMenu">
                <Name />
                <Navbar ancreProjet="#project"/>
            </div>
            <div className="arrowDown"></div>
            <div className="footerPage">
                <Footer />
            </div>
        </div>
    )
};

export default Home;