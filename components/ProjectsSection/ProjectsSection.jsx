"use client";

import { useTranslation } from "react-i18next";
import { SectionLayout } from "@shared/SectionLayout";

export const ProjectsSection = () => {
  const { t } = useTranslation("page");

  return (
    <SectionLayout
      tag={t("section.projects.tag")}
      title={t("section.projects.title")}
      description={t("section.projects.description")}
    ></SectionLayout>
  );
};
