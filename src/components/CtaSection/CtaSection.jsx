"use client";

import { useTranslation } from "react-i18next";
import { SectionLayout } from "@shared/SectionLayout";
import { GroupButtons } from "@shared/GroupButtons";
import Styles from "./CtaSection.module.scss";
import { OPTIONS_BUTTONS_CTASECTION } from "@/constants";

export const CtaSection = () => {
  const { t } = useTranslation("page");
  return (
    <div className={Styles.ctaSection} id="contact">
      <SectionLayout
        id="contact"
        intro={t("section.cta.intro")}
        title={t("section.cta.title")}
        description={t("section.cta.description")}
      />
      <GroupButtons options={OPTIONS_BUTTONS_CTASECTION} />
    </div>
  );
};
