import React from "react";
import Banner from "./Banner";
import Footer from "./Footerr";
import bannerTitle from "../assets/titleDecoration.png";
import testLogo from "../assets/logo/reservia.png";
import "../Styles/displayProject.css";

function DisplayProject() {

    return(
        <div className="containerDescriptionProject">
            <div className="title">
                <img src={bannerTitle} alt="banner decorative" className="bannerTitle"/>
                <img src={testLogo} alt="enterprise logo"  className="logoTitle"/>
            </div>
            <div className="descriptionProject">
                <div className="textProject">
                    <p>
                    Reservia est une petite entreprise qui propose un outil de planification pour leur vacances.
                    </p>
                    <p>
                    Le site de Reservia permet à ces usagers de trouver des hébergements et des activités dans un large choix de ville, 
                    en ayant la possibilité de filtrer ces hébergements par thématique, par ambiance  ou selon le budget.
                    </p>
                    <p> 
                    Un nouveau design basé sur les principes du Material Design venait d'être proposé par Loïc, designer UI.
                    </p>
                </div>
            </div>
            <div className="containerFooter">
                <Banner upOrDown="footerProject" />
                <Footer containerFooter="containerFooterScroll"/>
            </div>
        </div>
    )
};

export default DisplayProject;