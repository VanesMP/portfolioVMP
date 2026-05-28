"use client";
import { Icon } from "@shared/Icon";

export const SwitchButton = ({ option, active, onSelect, classNames }) => {
  const handleOptionClick = () => {
    onSelect(option.value);
  };
  return (
    <button role="radio" aria-checked={active} onClick={handleOptionClick} className={classNames}>
      <Icon name={option.iconName} />
      {option.label && <span>{option.label}</span>}
    </button>
  );
};
