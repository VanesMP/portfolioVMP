import Link from "next/link";
import Styles from "./ClickableCard.module.scss";

export const ClickableCard = ({ children, pathLink }) => {
  return (
    <Link className={Styles.clickableCard} href={pathLink}>
      {children}
    </Link>
  );
};
