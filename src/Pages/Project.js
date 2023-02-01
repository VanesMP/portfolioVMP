import React from "react";
import DisplayProject from "../Composnent/DisplayProject";
import Banner from "../Composnent/Banner";
import Name from "../Composnent/Name";
import Navbar from "../Composnent/Navbar";
import {dataList} from "../data.js";
import "../Styles/homePage.css";
import "../Styles/projectPage.css";
import { useParams } from "react-router";

function Project() {

    const { id } = useParams();

    console.log(id)

    return(
        <div>
            <Banner upOrDown="header" />
            {/* <Banner upOrDown="footer" /> */}
            <div className="insidePageProject">
                {dataList.map((data) => 
                    <DisplayProject 
                        dataLogo={data.logo}
                        dataEntreprise={data.entreprise}
                        dataSubject1={data.subject1}
                        dataSubject2={data.subject2}
                        dataObjectif={data.objectif}
                        dataRealisation={data.realisation}
                        textLinkProject={data.nameLinkApercu}
                        dataPictures={data.pictures}
                    />
                )}
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