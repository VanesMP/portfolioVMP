"use client";

import Link from "next/link";
import Styles from "./navBar.module.scss";
import { DevelopperCV } from "../../components-shared";

export const Navbar = ({ navig, pathAncre }) => {
  return (
    <div className={navig}>
      <nav className={Styles.navbar}>
        <ul className={Styles.list}>
          <Link href="/">
            <li className={Styles.listItem} key="home">
              HOME
            </li>
          </Link>
          <a href={pathAncre}>
            <li className={Styles.listItem} key="project">
              PROJECTS
            </li>
          </a>
          {/* <Link to="/about">
                        <li className={Styles.listItem} key={about}>ABOUT</li>
                    </Link> */}
          <a href={DevelopperCV} target="_blank" rel="noopener noreferrer">
            <li className={Styles.listItem} key="cv">
              C.V
            </li>
          </a>
          <Link href="/contact">
            <li className={Styles.listItem} key="contact">
              CONTACT
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
