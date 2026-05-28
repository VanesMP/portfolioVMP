"use client";

import { useTranslation } from "react-i18next";
import { ButtonLink } from "@shared/ButtonLink";
import Styles from "./GroupButtons.module.scss";

export const GroupButtons = ({ options = [] }) => {
  const { t } = useTranslation("page");

  return (
    <div className={Styles.groupButtons}>
      {options.map((opt) => (
        <ButtonLink
          key={t(opt.labelKey)}
          labelButtonLink={t(opt.labelKey)}
          pathLink={opt.path}
          variant={opt.variant}
          iconName={opt.iconName}
        />
      ))}
    </div>
  );
};
