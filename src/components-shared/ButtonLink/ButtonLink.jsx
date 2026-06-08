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
  nameSpace = "page",
  download = false,
}) => {
  const { t } = useTranslation(nameSpace);

  const className = clsx(Styles.buttonLink, Styles[`buttonLink--${variant}`]);
  const content = (
    <>
      {iconName && <Icon name={iconName} />}
      {t(labelButtonLink)}
    </>
  );

  if (download) {
    return (
      <a href={pathLink} className={className} download>
        {content}
      </a>
    );
  }

  return (
    <Link
      href={pathLink}
      className={className}
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {content}
    </Link>
  );
};
