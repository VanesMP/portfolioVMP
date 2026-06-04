import Styles from "./SectionLayout.module.scss";
import clsx from "clsx";

export const SectionLayout = ({ intro, title, description, children, className }) => {
  return (
    <div className={Styles.sectionLayout}>
      <div className={clsx(Styles.sectionLayout__textWrapper, className)}>
        <span className={Styles.sectionLayout__intro}>{intro}</span>
        <h2 className={Styles.sectionLayout__title}>{title}</h2>
        <p className={Styles.sectionLayout__description}>{description}</p>
      </div>
      {children}
    </div>
  );
};
