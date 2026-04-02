import { identite2 as picture, dotWhite } from "../../components-shared";
import Styles from "./identity.module.scss";
// import { Link } from "react-router-dom";

export const Identity = () => {
  return (
    <div className={Styles.identity}>
      <div className={Styles.photoId}>
        <img src={picture} alt="portrait of vanessa MP" className={Styles.portrait} />
      </div>
      <div className={Styles.textPresentation}>
        <div className={Styles.presentation}>
          <h3 className={Styles.bienvenu}>
            <img
              src={dotWhite}
              alt="dot decoration around the welcome message"
              className={Styles.dot}
            />
            Bienvenue sur mon portfolio
            <img
              src={dotWhite}
              alt="dot decoration around the welcome message"
              className={Styles.dot}
            />
          </h3>
          <p className={Styles.paragraphePresentation}>
            Après avoir travaillé durant plusieurs années dans le secteur de la vente, j'ai choisi
            de changer de carrière et de me reconvertir dans le développement d'applications
            front-end et la conception UX/UI Design.
          </p>
          <p className={Styles.paragraphePresentation}>
            Au fil de mes études, j'ai eu l'opportunité de découvrir et de développer mes
            compétences en développement d'applications front-end ainsi qu'en design graphique.
          </p>
          <p className={Styles.paragraphePresentation}>
            Je suis ravie de vous présenter ci-dessous les différents projets que j'ai réalisés
            pendant ma formation chez Openclassrooms.{" "}
          </p>
          <p className={Styles.paragraphePresentation}>
            Je vous invite à les découvrir ci-dessous et j'espère que vous apprécierez votre visite
            !
          </p>
        </div>
        {/* <div>
                    <Link to="/about" className="learnMore">En savoir plus</Link>
                </div> */}
      </div>
    </div>
  );
};
