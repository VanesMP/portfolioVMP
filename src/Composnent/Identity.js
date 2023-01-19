import React from "react";
import picture from "../assets/picture.png";
import dot from "../assets/dotWhite.svg";
import "../Styles/identity.css";

function Identity() {
    return(
        <div className="identity">
            <div className="photoId">
                <img src={picture} alt="portrait of vanessa MP" className="portrait"/>
            </div>
            <div className="textPresentation">
                <div className="presentation">
                    <h3 className="bienvenu">
                        <img src={dot} alt="dot decoration around the welcome message" className="dot"/>
                            Bienvenue sur mon portfolio
                        <img src={dot} alt="dot decoration around the welcome message" className="dot"/>
                    </h3>
                    <p className="paragraphePresentation">Aprés avoir travaillé plusieurs années dans le sectuer de la vente, 
                        j' ai choisit de me reconvertir dans le dévelopement d' application
                        front-end et l' UX/XI Design.
                    </p>
                    <p className="paragraphePresentation">Au cours de mes études, j' ai pu découvrir et acquérir des 
                        compétences en développement d' application front-end  ainsi 
                        qu'en design.
                    </p>
                    <p className="paragraphePresentation">Vous pouvez découvrir ci-dessous les différents projets réalisés
                        au cours de ma formation chez Openclassrooms. 
                        Bonne visite!
                    </p>
                </div>
                <div>
                    <p className="learnMore">En savoir plus</p>
                </div>
            </div>
        </div>
    )
};

export default Identity;