"use client";

import Styles from "./HeroTitle.module.scss";
import { Trans, useTranslation } from "react-i18next";
import { GradientText } from "@shared/StyledComponents";

export const HeroTitle = () => {
  const { t } = useTranslation("page");

  return (
    <h1 className={Styles.heroTitle}>
      <Trans
        i18nKey={t("heroBanner.title")}
        ns="page"
        components={{ GradientText: <GradientText /> }}
      />
    </h1>
  );
};
