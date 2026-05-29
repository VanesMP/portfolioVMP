import Styles from "./ContentCard.module.scss";
import clsx from "clsx";

export const ContentCard = ({ className, title, intro, description }) => {
  return (
    <div className={clsx(Styles.contentCard, className)}>
      <span className={Styles.contentCard__intro}>{intro}</span>
      <h2 className={Styles.contentCard__title}>{title}</h2>
      <p className={Styles.contentCard__description}>{description}</p>
    </div>
  );
};
