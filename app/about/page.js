"use client";

import Styles from "../../styles/about.module.scss";
import { Background } from "../../components-shared";
import { Footer, Header } from "../../components-widgets";

export const About = () => {
  return (
    <div>
      <Background darkorclear="clear" />
      <Header fixPosition="positionHeaderProject" classNavig={Styles.navFooter} />
      <div className={Styles.containerAbout}>
        <h1 className={Styles.textComingSoon}> Coming soon </h1>
        <span className={Styles.loader} />
      </div>
      <Footer fixPosition="positionAbout" />
    </div>
  );
};
