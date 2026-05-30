import { ClickableCard } from "../ClickableCard";
import Styles from "./DevCard.module.scss";
import { Tag } from "@shared";

export const DevCard = ({ title, subtitle, date, description, pathLink, tagList }) => {
  return (
    <ClickableCard pathLink={pathLink} className={Styles.devCard}>
      <div className={Styles.devCard__header}>
        <div className={Styles.devCard__header__text}>
          <h3 className={Styles.devCard__header__text__title}>{title}</h3>
          <span className={Styles.devCard__header__text__subtitle}>{subtitle}</span>
        </div>
        <span className={Styles.devCard__header__date}>{date}</span>
      </div>
      <p className={Styles.devCard__description}>{description}</p>
      <div className={Styles.devCard__tagList}>
        {tagList && tagList.map((tag) => <Tag key={tag.title} tagName={tag.title} />)}
      </div>
    </ClickableCard>
  );
};
