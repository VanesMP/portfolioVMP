"use client";
import Link from "next/link";
import Styles from "./CustomLink.module.scss";
import { useTranslation } from "react-i18next";

export const CustomLink = ({ href, label }) => {
  const { t } = useTranslation("page");
  return (
    <Link href={href} className={Styles.customLink}>
      {t(label)}
    </Link>
  );
};
