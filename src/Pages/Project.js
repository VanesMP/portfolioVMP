import React from "react";
import DisplayProject from "../Composnent/DisplayProject";
import Banner from "../Composnent/Banner";
import Name from "../Composnent/Name";
import Navbar from "../Composnent/Navbar";
// import Footer from "../Composnent/Footerr";
import "../Styles/homePage.css";
import "../Styles/projectPage.css";

function Project() {
    return(
        <div>
            <Banner upOrDown="header" />
            {/* <Banner upOrDown="footer" /> */}
            <div className="insidePageProject">
                <DisplayProject />
            </div>
            <div className="headerPage">
                <Name nameprop="nameProject" jobprop="jobproject"/>
                <Navbar pathAncre="/" />
            </div>
            {/* <div className="footerPage">
                <Footer containerFooter="containerFooterScroll"/>
            </div> */}
        </div>
    )
};

export default Project;