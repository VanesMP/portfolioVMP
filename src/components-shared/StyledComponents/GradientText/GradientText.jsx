import Styles from "./GradientText.module.scss";

export const GradientText = ({ children }) => {
  return <span className={Styles.gradientText}>{children}</span>;
};
