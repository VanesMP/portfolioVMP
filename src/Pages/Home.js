import React from "react";
import Background from "../Composnent/Background";
import Name from "../Composnent/Name";
import Navbar from "../Composnent/Navbar";
import "../Styles/homePage.css";

function Home() {
    return(
        <div>
            <Background />
            <div className="headerHomePage">
                <Name />
                <Navbar />
            </div>
        </div>
    )
};

export default Home;