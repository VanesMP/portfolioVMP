import Styles from "./ButtonLink.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { BUTTON_VARIANTS } from "src";
import { Icon } from "@shared/Icon";

export const ButtonLink = ({
  labelButtonLink,
  pathLink,
  iconName,
  variant = BUTTON_VARIANTS.CONTAINED,
}) => {
  return (
    <Link href={pathLink} className={clsx(Styles.buttonLink, Styles[`buttonLink--${variant}`])}>
      {iconName && <Icon name={iconName} />}
      {labelButtonLink}
    </Link>
  );
};
