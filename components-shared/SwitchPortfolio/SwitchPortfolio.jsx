"use client";

import { useTranslation } from "react-i18next";
import clsx from "clsx";
import Styles from "./SwitchPortfolio.module.scss";
import { SwitchButton } from "@/components-shared/SwitchButton";

export const SwitchPortfolio = ({ options = [], value, onChange }) => {
  const { t } = useTranslation("page");
  return (
    <div className={Styles.switchPortfolio}>
      {options.map((opt) => (
        <SwitchButton
          key={opt.value}
          option={{ ...opt, label: t(opt.labelKey) }}
          active={value === opt.value}
          onSelect={onChange}
          classNames={clsx(Styles.switchPortfolio__switchButton, {
            [Styles["switchPortfolio__switchButton--active"]]: value === opt.value,
          })}
        />
      ))}
    </div>
  );
};
