import React from "react";
import picture from "../assets/identite2.jpg";
import dot from "../assets/dotWhite.svg";
import "../Styles/identity.css";
import { Link } from "react-router-dom";

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
                    <p className="paragraphePresentation">Après avoir travaillé durant plusieurs années dans le secteur de la vente, 
                    j'ai choisi de changer de carrière et de me reconvertir dans le développement d'applications front-end et la conception
                     UX/UI Design.
                    </p>
                    <p className="paragraphePresentation">Au fil de mes études, j'ai eu l'opportunité de découvrir et de développer mes compétences 
                    en développement d'applications front-end ainsi qu'en design graphique.
                    </p>
                    <p className="paragraphePresentation">Je suis ravie de vous présenter ci-dessous les différents projets que j'ai réalisés 
                    pendant ma formation chez Openclassrooms. 
                    Je vous invite à les découvrir ci-dessous et j'espère que vous apprécierez votre visite !
                    </p>
                </div>
                <div>
                    <Link to="/about" className="learnMore">En savoir plus</Link>
                </div>
            </div>
        </div>
    )
};

export default Identity;