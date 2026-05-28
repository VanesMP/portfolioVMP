"use client";

import { useTranslation } from "react-i18next";
import { SectionLayout } from "@shared/SectionLayout";

export const TrainingSection = () => {
  const { t } = useTranslation("page");

  return (
    <SectionLayout
      tag={t("section.training.tag")}
      title={t("section.training.title")}
      description={t("section.training.description")}
    ></SectionLayout>
  );
};
