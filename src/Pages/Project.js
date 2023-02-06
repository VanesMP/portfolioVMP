import React from "react";
import DisplayProject from "../Composnent/DisplayProject";
import {dataList} from "../data.js";
import "../Styles/projectPage.css";
import { useParams } from "react-router";
import Home from "./Home";
import Header from "../Composnent/Header";
import Footer from "../Composnent/Footer";

function Project() {

    const { id } = useParams();

    const itemProject = dataList.filter((project) => project.id === id)[0]
    console.log(itemProject)

    if(itemProject === undefined) {
        return(
            <div>
                <Home />
            </div>
        )
    }else {
    return(
        <div>
            <Header 
                fixPosition="positionHeaderProject"
                classNavig="navFooter"
                seeProject="/"
            />
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
                        dataLinkWebsite={itemProject.gitWebsite}
                        linkGithub={itemProject.gitLink}
                        linkProject={itemProject.gitWebsite}
                    />
            </div>
            <Footer />
        </div>
    )}
};

export default Project;