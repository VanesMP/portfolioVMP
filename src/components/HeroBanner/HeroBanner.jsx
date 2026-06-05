"use client";

import Styles from "./HeroBanner.module.scss";
import { useTranslation } from "react-i18next";
import { OPTIONS_BUTTONS_HEROBANNER } from "@/constants/groupButtons";
import { GroupButtons } from "@shared/GroupButtons";
import { AnimatedImageBanner, HeroTitle } from "@components";

export const HeroBanner = () => {
  const { t } = useTranslation("page");

  return (
    <div className={Styles.heroBanner}>
      <div className={Styles.heroBanner__container}>
        <AnimatedImageBanner />
        <div className={Styles.heroBanner__content}>
          <HeroTitle />
          <span className={Styles.heroBanner__subtitle}>{t("heroBanner.subtitle")}</span>
          <GroupButtons options={OPTIONS_BUTTONS_HEROBANNER} />
        </div>
      </div>
    </div>
  );
};
