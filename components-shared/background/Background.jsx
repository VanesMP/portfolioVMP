import Styles from "./background.module.scss";
import { BUBBLES_COUNT } from "./constants";

export const Background = ({ darkorclear }) => {
  return (
    <div>
      <div className={Styles.background} id={darkorclear}>
        {Array.from({ length: BUBBLES_COUNT }).map((_, i) => (
          <span key={i} className={Styles.bubbles} />
        ))}
      </div>
    </div>
  );
};
