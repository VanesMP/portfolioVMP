import Styles from "./buttonLink.module.scss";

export const ButtonLink = ({ textButtonLink, pathLink }) => {
  return (
    <div>
      <div className={Styles.boxButton}>
        <a href={pathLink} target="_blank" rel="noopener noreferrer">
          <p className={Styles.textButton}>{textButtonLink}</p>
        </a>
      </div>
    </div>
  );
};
