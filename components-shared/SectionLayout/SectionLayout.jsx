import Styles from "./SectionLayout.module.scss";

export const SectionLayout = ({ tag, title, description, children }) => {
  return (
    <div className={Styles.sectionLayout}>
      <div className={Styles.sectionLayout__text}>
        <span className={Styles.sectionLayout__tag}>{tag}</span>
        <h2 className={Styles.sectionLayout__title}>{title}</h2>
        <p className={Styles.sectionLayout__description}>{description}</p>
      </div>
      {children}
    </div>
  );
};
