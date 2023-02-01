import React from "react";
import Banner from "./Banner";
import Footer from "./Footerr";
import bannerTitle from "../assets/titleDecoration.png";
import "../Styles/displayProject.css";
import gitLink from "../assets/githubLink.png";
import webLink from "../assets/webLink.png";
import {dataList} from "../data.js";
import ButtonLink from "./buttonLink";

function DisplayProject() {

    console.log(dataList);

    return(
    <div>
    {dataList.map((data) => 
        <div className="containerDescriptionProject">
                <div className="title">
                    <img src={bannerTitle} alt="banner decorative" className="bannerTitle"/>
                    <img src={data.logo} alt="enterprise logo"  className="logoTitle"/>
                </div>
                <div className="descriptionProject">
                    <div className="textProject">
                        <div className="textEntreprise">
                        <p>
                        {data.entreprise}
                        </p><br/>
                        <p>
                        {data.subject1}
                        </p><br/>
                        <p> 
                        {data.subject2}
                        </p>
                        </div>
                        <div className="textObjectif">
                            <h4 className="titreTextPres">L' objectif</h4>
                            <p>
                            {data.objectif}
                            </p>
                        </div>
                        <div className="textRealisation">
                            <h4 className="titreTextPres">Le projet</h4>
                            <p>
                            {data.realisation}
                            </p>
                        </div>
                        <div className="textDiscover">
                            <h4 className="titreTextPres">En découvrir plus ...</h4>
                                <div className="containerLinkProject">
                                    <ButtonLink textButtonLink="Hello" />
                                    <img src={webLink} alt="lien siteweb" className="linkproject"/>
                                    <img src={gitLink} alt="lien github" className="linkproject"/>
                                </div>
                        </div>
                    </div>
                </div>
            <div className="galleryImg">
            {data.pictures.map((picture, index) =>
                <img key={index} src={picture} alt={`images in situ ${index}`} className="imgGallery" />
                )}
            </div>
            <div className="containerFooter">
            <Banner upOrDown="footerProject" />
            <Footer containerFooter="containerFooterScroll"/>
            </div>
            </div>
        )}
    </div>
    )
};

export default DisplayProject;