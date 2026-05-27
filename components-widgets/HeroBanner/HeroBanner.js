"use client";

import { ButtonLink } from "@shared/ButtonLink";
import Styles from "./HeroBanner.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { BUTTON_VARIANTS } from "src";

export const HeroBanner = () => {
  const { t } = useTranslation("page");

  return (
    <div className={Styles.heroBanner}>
      <div className={Styles.heroBanner__imageContainer}>
        <Image
          src="/images/identity/pict-dev.webp"
          alt="identity picture"
          width={256}
          height={320}
          priority
          className={Styles.heroBanner__image}
        />
      </div>
      <div className={Styles.heroBanner__content}>
        <h1 className={Styles.heroBanner__title}>{t("heroBanner.title")}</h1>
        <span className={Styles.heroBanner__subtitle}>{t("heroBanner.subtitle")}</span>
        <div className={Styles.heroBanner__buttons}>
          <ButtonLink labelButtonLink={t("heroBanner.buttonProjects")} pathLink="/" />
          <ButtonLink
            labelButtonLink={t("heroBanner.buttonContact")}
            pathLink="/"
            variant={BUTTON_VARIANTS.OUTLINED}
          />
        </div>
      </div>
    </div>
  );
};
