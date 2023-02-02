import React from "react";
import DisplayProject from "../Composnent/DisplayProject";
// import Banner from "../Composnent/Banner";
import Name from "../Composnent/Name";
import Navbar from "../Composnent/Navbar";
import {dataList} from "../data.js";
import "../Styles/homePage.css";
import "../Styles/projectPage.css";
import { useParams } from "react-router";
import Home from "./Home";

function Project() {

    const { id } = useParams();
    console.log(id)

    const itemProject = dataList.filter((project) => project.id === id)[0]

    if(itemProject === undefined) {
        return(
            <div>
                <Home />
            </div>
        )
    }else {
    return(
        <div>
            {/* <Banner upOrDown="header" /> */}
            <div className="insidePageProject">
                    <DisplayProject 
                        dataLogo={itemProject.logo}
                        dataEntreprise={itemProject.entreprise}
                        dataSubject1={itemProject.subject1}
                        dataSubject2={itemProject.subject2}
                        dataObjectif={itemProject.objectif}
                        dataRealisation={itemProject.realisation}
                        textLinkProject={itemProject.nameLinkApercu}
                        dataPictures={itemProject.pictures}
                        linkProject={itemProject.gitWebsite}
                    />
            </div>
            <div className="headerPage">
                <Name nameprop="nameProject" jobprop="jobproject"/>
                <Navbar pathAncre="/" />
            </div>
        </div>
    )}
};

export default Project;