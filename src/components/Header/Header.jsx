import { NavBar } from "../NavBar";
import Styles from "./Header.module.scss";
import { Logo } from "@components/Logo";

export const Header = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.header__container}>
        <Logo />
        <div className={Styles.header__actions}>
          <NavBar />
        </div>
      </div>
    </div>
  );
};
