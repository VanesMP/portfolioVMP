"use client";

import Link from "next/link";
import Styles from "./Footer.module.scss";
import { NavBar } from "../NavBar";
import { useTranslation } from "react-i18next";
import { ROUTES } from "@/constants/routes";

export const Footer = () => {
  const { t } = useTranslation("page");
  return (
    <div className={Styles.footer}>
      <div className={Styles.footer__content}>
        <NavBar />
        <div className={Styles.footer__info}>
          <span>{t("footer.copyright")}</span>
          <Link
            href={ROUTES.PRIVACY_POLICY}
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.footer__policyPrivacy}
          >
            {t("footer.privacyPolicy")}
          </Link>
        </div>
      </div>
    </div>
  );
};
