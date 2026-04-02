import { titleDecoration } from "../../components-shared";
import Styles from "./displayProject.module.scss";
import { ButtonLink } from "../../components-shared/buttonLink";

export const DisplayProject = ({
  dataLogo,
  dataEntreprise,
  dataSubject1,
  dataSubject2,
  dataObjectif,
  dataRealisation,
  textLinkProject,
  dataPictures,
  dataLinkWebsite,
  linkGithub,
  linkProject,
}) => {
  return (
    <div>
      <div className={Styles.containerDescriptionProject}>
        <div className={Styles.title}>
          <img src={titleDecoration} alt="banner decorative" className={Styles.bannerTitle} />
          <img src={dataLogo} alt="enterprise logo" className={Styles.logoTitle} />
        </div>
        <div className={Styles.descriptionProject}>
          <div className={Styles.textProject}>
            <div className={Styles.textEntreprise}>
              <p>{dataEntreprise}</p>
              <br />
              <p>{dataSubject1}</p>
              <br />
              <p>{dataSubject2}</p>
            </div>
            <div className={Styles.textObjectif}>
              <h4 className={Styles.titreTextPres}>L' objectif</h4>
              <p>{dataObjectif}</p>
            </div>
            <div className={Styles.textRealisation}>
              <h4 className={Styles.titreTextPres}>Le projet</h4>
              <p>{dataRealisation}</p>
            </div>
            <div className={Styles.textDiscover}>
              <h4 className={Styles.titreTextPres}>En découvrir plus ...</h4>
              <div className={Styles.containerLinkProject}>
                {dataLinkWebsite !== "?" && (
                  <ButtonLink textButtonLink={textLinkProject} pathLink={linkProject} />
                )}
                {linkGithub !== "?" && (
                  <ButtonLink textButtonLink="Le code sur Github" pathLink={linkGithub} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.galleryImg}>
          {dataPictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt={`images in situ ${index}`}
              className={Styles.imgGallery}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
