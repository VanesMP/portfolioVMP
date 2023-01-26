import React from "react";
import Name from "../Composnent/Name";
import Navbar from "../Composnent/Navbar";
import Footer from "../Composnent/Footerr";

function Project() {
    return(
        <div>
            <div className="headerPage" id="ancreMenu">
                <Name />
                <Navbar />
            </div>
            <div className="footerPage">
                <Footer />
            </div>
        </div>
    )
};

export default Project;