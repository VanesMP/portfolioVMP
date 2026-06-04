import Styles from "./Header.module.scss";
import { Logo } from "@components/Logo";

export const Header = () => {
  return (
    <div className={Styles.header}>
      <Logo />
    </div>
  );
};
