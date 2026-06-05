"use client";

import Styles from "./ButtonLink.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { BUTTON_VARIANTS } from "src";
import { Icon } from "@shared/Icon";
import { useTranslation } from "react-i18next";

export const ButtonLink = ({
  labelButtonLink,
  pathLink,
  iconName,
  variant = BUTTON_VARIANTS.CONTAINED,
  openInNewTab = false,
}) => {
  const { t } = useTranslation("page");

  return (
    <Link
      href={pathLink}
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
      className={clsx(Styles.buttonLink, Styles[`buttonLink--${variant}`])}
    >
      {iconName && <Icon name={iconName} />}
      {t(labelButtonLink)}
    </Link>
  );
};
