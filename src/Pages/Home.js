import React from "react";
import arrowDown from "../assets/arrowDown.svg";
import Background from "../Composnent/Background";
import Footer from "../Composnent/Footerr";
import Identity from "../Composnent/Identity";
import Name from "../Composnent/Name";
import Navbar from "../Composnent/Navbar";
import "../Styles/homePage.css";

function Home() {
    return(
        <div>
            <Background />
            <div>
            <Identity />
            <img src={arrowDown} alt="arrow to check directly all the projects"  className="arrow"/>
            </div>
            <div className="containerPresentation">
            </div>
            <div className="headerPage">
                <Name />
                <Navbar />
            </div>
            <div className="arrowDown"></div>
            
            <div className="footerPage">
                <Footer />
            </div>
        </div>
    )
};

export default Home;