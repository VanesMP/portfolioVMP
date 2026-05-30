import Styles from "./Tag.module.scss";

export const Tag = ({ tagName }) => {
  return (
    <div className={Styles.tag}>
      <span className={Styles.tag__text}>{tagName}</span>
    </div>
  );
};
