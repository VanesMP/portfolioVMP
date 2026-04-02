"use client";

import { useState } from "react";
import Link from "next/link";
import { DevelopperCV } from "../../components-shared";
import Styles from "./burgerNav.module.scss";
import clsx from "clsx";

export const BurgerNav = ({ pathAncre, navig }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={navig}>
      <div className={clsx(`menuBg`, isMenuOpen ? "fs" : "")} />
      <div className={clsx(`menuBurger`, isMenuOpen ? "fs" : "")} onClick={handleMenuClick}>
        {isMenuOpen ? "✕" : "☰"}
      </div>
      <div className={clsx(`menuItems`, isMenuOpen ? "fs" : "")}>
        <Link href="/">
          <div className={Styles.list} onClick={handleMenuClick}>
            HOME
          </div>
        </Link>
        <a href={pathAncre}>
          <div className={Styles.list} onClick={handleMenuClick}>
            PROJECTS
          </div>
        </a>
        {/* <Link to="/about">
                        <li>ABOUT</li>
                    </Link> */}
        <a href={DevelopperCV} target="_blank" rel="noopener noreferrer">
          <div className={Styles.list} onClick={handleMenuClick}>
            C.V
          </div>
        </a>
        <Link href="/contact">
          <div className={Styles.list} onClick={handleMenuClick}>
            CONTACT
          </div>
        </Link>
      </div>
    </div>
  );
};
