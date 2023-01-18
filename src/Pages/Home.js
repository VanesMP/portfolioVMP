import React from "react";
import Background from "../Composnent/Background";
import Footer from "../Composnent/Footerr";
import Name from "../Composnent/Name";
import Navbar from "../Composnent/Navbar";
import "../Styles/homePage.css";

function Home() {
    return(
        <div>
            <Background />
            <div className="headerPage">
                <Name />
                <Navbar />
            </div>
            <div className="footerPage">
                <Footer />
            </div>
        </div>
    )
};

export default Home;