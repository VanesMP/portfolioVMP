"use client";

import { useTranslation } from "react-i18next";
import { GroupButtons } from "@shared/GroupButtons";
import { ContentCard } from "@shared";
import Styles from "./CtaSection.module.scss";
import { OPTIONS_BUTTONS_CTASECTION } from "@/src/constants";

export const CtaSection = () => {
  const { t } = useTranslation("page");
  return (
    <div className={Styles.ctaSection}>
      <ContentCard
        intro={t("section.cta.intro")}
        title={t("section.cta.title")}
        description={t("section.cta.description")}
        className={Styles.ctaSection__text}
      />
      <GroupButtons options={OPTIONS_BUTTONS_CTASECTION} />
    </div>
  );
};
