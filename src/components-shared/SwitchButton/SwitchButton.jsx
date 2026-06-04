"use client";
import { Icon } from "@shared/Icon";
import { useTranslation } from "react-i18next";
import { ICON_SIZES } from "@/constants";

export const SwitchButton = ({ option, active, onSelect, classNames }) => {
  const { t } = useTranslation("page");

  const iconSize = option.iconSize ? option.iconSize : ICON_SIZES.md;

  const handleOptionClick = () => {
    onSelect(option.value);
  };
  return (
    <button role="radio" aria-checked={active} onClick={handleOptionClick} className={classNames}>
      <Icon name={option.iconName} size={iconSize} />
      {option.label && <span>{t(option.label)}</span>}
    </button>
  );
};
