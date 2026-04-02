"use client";

import { useEffect, useState } from "react";
import { arrowDown, arrowUp, Background } from "../components-shared";
import { Footer, Header, Identity, Gallery } from "../components-widgets";
import Styles from "../styles/homePage.module.scss";

const Home = () => {
  const [textClass, setTextClass] = useState("default");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 860) {
      setTextClass("scrolled");
    } else {
      setTextClass("default");
    }
  };

  return (
    <div>
      <Background darkorclear="darkbackground" />
      <div className={Styles.boxIdentity}>
        <Identity />
        <a href="#projects">
          <img src={arrowDown} alt="arrow to check directly all the projects" className="arrow" />
        </a>
        <div className={Styles.containerPresentation}>
          <div className={Styles.upPageProjects} id="projects"></div>
          <Gallery />
          <a href="#ancreMenu">
            <img src={arrowUp} alt="arrow to get back" className="arrowUp" />
          </a>
        </div>
      </div>
      <Header
        fixPosition="positionHeaderHome"
        idTextclass={textClass}
        seeProject="#projects"
        classNavig="nav"
        classNavigBurger="menu"
      />
      <Footer fixPosition="positionFooterHome" />
    </div>
  );
};

export default Home;
