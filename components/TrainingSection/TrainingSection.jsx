"use client";

import { useTranslation } from "react-i18next";
import { SectionLayout } from "@shared/SectionLayout";
import { DevCard } from "@shared/Cards/DevCard";

export const TrainingSection = () => {
  const { t } = useTranslation("page");

  return (
    <SectionLayout
      intro={t("section.training.tag")}
      title={t("section.training.title")}
      description={t("section.training.description")}
    >
      <DevCard
        title="title"
        subtitle="subtitle"
        date="date"
        description="description"
        pathLink="/projects/project1"
      />
    </SectionLayout>
  );
};
