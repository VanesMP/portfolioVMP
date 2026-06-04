"use client";

import { useTranslation } from "react-i18next";
import { SectionLayout } from "@shared/SectionLayout";
import { DevCard } from "@shared/Cards/DevCard";

export const ProjectsSection = () => {
  const { t } = useTranslation("page");

  return (
    <SectionLayout
      id="projects"
      intro={t("section.projects.tag")}
      title={t("section.projects.title")}
      description={t("section.projects.description")}
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
