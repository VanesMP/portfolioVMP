"use client";

import Styles from "@styles/about.module.scss";
// import { Background } from "@shared";
import { Footer } from "@widgets/footer";
// import { Header } from "@widgets/header";

const About = () => {
  return (
    <div>
      {/* <Background darkorclear="clear" /> */}
      {/* <Header fixPosition="positionHeaderProject" classNavig={Styles.navFooter} /> */}
      <div className={Styles.containerAbout}>
        <h1 className={Styles.textComingSoon}> Coming soon </h1>
        <span className={Styles.loader} />
      </div>
      <Footer fixPosition="positionAbout" />
    </div>
  );
};

export default About;
