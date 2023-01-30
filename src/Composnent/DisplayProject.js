import React from "react";
import Banner from "./Banner";
import Footer from "./Footerr";
import bannerTitle from "../assets/titleDecoration.png";
import testLogo from "../assets/logo/reservia.png";
import "../Styles/displayProject.css";
import gitLink from "../assets/githubLink.png";
import webLink from "../assets/webLink.png";
import one from "../assets/test/imageA.Reservia.jpg";
import two from "../assets/test/imageB.Reservia.jpg";
import three from "../assets/test/imageC.Reservia.jpg";

function DisplayProject() {

    return(
        <div className="containerDescriptionProject">
            <div className="title">
                <img src={bannerTitle} alt="banner decorative" className="bannerTitle"/>
                <img src={testLogo} alt="enterprise logo"  className="logoTitle"/>
            </div>
            <div className="descriptionProject">
                <div className="textProject">
                    <div className="textEntreprise">
                        <p>
                        Reservia est une petite entreprise qui propose un outil de planification pour leur vacances.
                        </p><br/>
                        <p>
                        Le site de Reservia permet à ces usagers de trouver des hébergements et des activités dans un large choix de ville, 
                        en ayant la possibilité de filtrer ces hébergements par thématique, par ambiance  ou selon le budget.
                        </p><br/>
                        <p> 
                        Un nouveau design basé sur les principes du Material Design venait d'être proposé par Loïc, designer UI.
                        </p>
                    </div>
                    <div className="textObjectif">
                        <h4 className="titreTextPres">L' objectif</h4>
                        <p>
                            Mon travail sur ce projet, était de réaliser un site web responsive en suivant la maquette réalisé par Loïc.
                            La contrainte de ce projet etait qu'il devait etre réalisé en utilisant uniquement HTML et CSS.
                        </p>
                    </div>
                    <div className="textRealisation">
                        <h4 className="titreTextPres">La réalisation</h4>
                        <p>
                        Le parcours utilisateur commence par l'affichage de la page d'accueil de Reservia,
                        qui propose des hébergements et des activités.
                        Depuis cette page d'accueil, l'usager pourra par la suite faire une saisie dans la barre 
                        de rechercghe pour trouver un hébergement dans la ville souhaitée, puis affiner sa recherche en utilisant les filtres proposés. 
                        Les liens dans le menu sont des ancres qui emmenent aux sections de la page.
                        </p>
                    </div>
                    <div className="textDiscover">
                        <h4 className="titreTextPres">En découvrir plus ...</h4>
                            <div className="containerLinkProject">
                                <img src={webLink} alt="lien siteweb" className="linkproject"/>
                                <img src={gitLink} alt="lien github" className="linkproject"/>
                            </div>
                    </div>
                </div>
            </div>
            <div className="galleryImg">
                <img src={one} alt="1" className="imgGallery" />
                <img src={two} alt="2" className="imgGallery" />
                <img src={three} alt="3" className="imgGallery" />
            </div>
            <div className="containerFooter">
                <Banner upOrDown="footerProject" />
                <Footer containerFooter="containerFooterScroll"/>
            </div>
        </div>
    )
};

export default DisplayProject;