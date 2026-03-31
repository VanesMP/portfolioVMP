import Styles from "./background.module.scss";

export const Background = ({ darkorclear }) => {
  return (
    <div>
      <div className={Styles.background} id={darkorclear}>
        {Array.from({ length: 44 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
    </div>
  );
};
