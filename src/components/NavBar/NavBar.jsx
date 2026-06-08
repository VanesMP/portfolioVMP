import Styles from "./NavBar.module.scss";
import { CustomLink } from "@shared/CustomLink";
import { NAVBAR_LINKS } from "@/constants/header";

export const NavBar = () => {
  return (
    <div className={Styles.navBar}>
      {NAVBAR_LINKS.map((link) => (
        <CustomLink key={link.label} href={link.href} label={link.label} />
      ))}
    </div>
  );
};
