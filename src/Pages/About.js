import React from "react";
import "../Styles/about.css";
import Background from "../Composnent/Background";
import Footer from "../Composnent/Footer";
import Header from "../Composnent/Header";

function About() {

    return(
        <div>
            <Background darkorclear="clear" />
            <Header 
                fixPosition="positionHeaderProject"
                classNavig="navFooter" 
            />
            <div className="containerAbout">
                <h1 className="textComingSoon"> Coming soon </h1>
                <span className="loader"></span>
            </div>
            <Footer fixPosition="positionAbout"/>
        </div>
    )
};

export default About;