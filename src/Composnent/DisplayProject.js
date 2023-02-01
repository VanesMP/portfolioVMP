import React from "react";
import Banner from "./Banner";
import Footer from "./Footerr";
import bannerTitle from "../assets/titleDecoration.png";
import "../Styles/displayProject.css";
import ButtonLink from "./buttonLink";

function DisplayProject({ dataLogo, dataEntreprise, dataSubject1, dataSubject2, dataObjectif, dataRealisation, textLinkProject, dataPictures }) {


    return(
    <div>
        <div className="containerDescriptionProject">
                <div className="title">
                    <img src={bannerTitle} alt="banner decorative" className="bannerTitle"/>
                    <img src={dataLogo} alt="enterprise logo"  className="logoTitle"/>
                </div>
                <div className="descriptionProject">
                    <div className="textProject">
                        <div className="textEntreprise">
                        <p>
                        {dataEntreprise}
                        </p><br/>
                        <p>
                        {dataSubject1}
                        </p><br/>
                        <p> 
                        {dataSubject2}
                        </p>
                        </div>
                        <div className="textObjectif">
                            <h4 className="titreTextPres">L' objectif</h4>
                            <p>
                            {dataObjectif}
                            </p>
                        </div>
                        <div className="textRealisation">
                            <h4 className="titreTextPres">Le projet</h4>
                            <p>
                            {dataRealisation}
                            </p>
                        </div>
                        <div className="textDiscover">
                            <h4 className="titreTextPres">En découvrir plus ...</h4>
                                <div className="containerLinkProject">
                                    <ButtonLink textButtonLink={textLinkProject} />
                                </div>
                        </div>
                    </div>
                </div>
            <div className="galleryImg">
            {dataPictures.map((picture, index) =>
                <img key={index} src={picture} alt={`images in situ ${index}`} className="imgGallery" />
                )}
            </div>
            <div className="containerFooter">
            <Banner upOrDown="footerProject" />
            <Footer containerFooter="containerFooterScroll"/>
            </div>
            </div>
    </div>
    )
};

export default DisplayProject;