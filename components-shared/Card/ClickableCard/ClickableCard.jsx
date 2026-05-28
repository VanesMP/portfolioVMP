import Link from "next/link";
import Styles from "./ClickableCard.module.scss";

export const ClickableCard = ({ title, subtitle, date, description, pathLink }) => {
  return (
    <Link className={Styles.clickableCard} href={pathLink}>
      <div className={Styles.clickableCard__header}>
        <div className={Styles.clickableCard__header__text}>
          <h3 className={Styles.clickableCard__header__text__title}>{title}</h3>
          <span className={Styles.clickableCard__header__text__subtitle}>{subtitle}</span>
        </div>
        <span className={Styles.clickableCard__header__date}>{date}</span>
      </div>
      <p className={Styles.clickableCard__description}>{description}</p>
      {/* <div className={Styles.clickableCard__tagList}>

      </div> */}
    </Link>
  );
};
