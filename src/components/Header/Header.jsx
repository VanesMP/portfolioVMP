"use client";
import { useState } from "react";
import { OPTION_THEMES, THEME_VALUE } from "@/constants";
import { SwitchTheme } from "@/components-shared";
import { NavBar } from "../NavBar";
import Styles from "./Header.module.scss";
import { Logo } from "@components/Logo";

export const Header = () => {
  const [selectedTheme, setSelectedTheme] = useState(THEME_VALUE.LIGHT);

  return (
    <div className={Styles.header}>
      <div className={Styles.header__container}>
        <Logo />
        <div className={Styles.header__actions}>
          <NavBar />
          <SwitchTheme value={selectedTheme} onChange={setSelectedTheme} options={OPTION_THEMES} />
        </div>
      </div>
    </div>
  );
};
