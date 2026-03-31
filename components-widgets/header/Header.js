import Styles from "./header.module.scss";
import { BurgerNav } from "../burgerNav";
import { Navbar } from "../navBar";

export const Header = ({ fixPosition, idTextclass, seeProject, classNavig, classNavigBurger }) => {
  return (
    <div id="ancreMenu">
      <div className={Styles.banner} id={fixPosition}>
        <div className={Styles.containerName}>
          <h1 className={Styles.name}>Vanessa Macedo-Pinto</h1>
          <h2 className={Styles.job} id={idTextclass}>
            Développeuse Frontend - UX/UI Designer
          </h2>
        </div>
        <Navbar pathAncre={seeProject} navig={classNavig} />
        <BurgerNav pathAncre={seeProject} navig={classNavigBurger} />
      </div>
    </div>
  );
};
