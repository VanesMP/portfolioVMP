import { SwitchButton } from "../SwitchButton";
import Styles from "./SwitchTheme.module.scss";
import { OPTION_THEMES } from "@/constants";

export const SwitchTheme = ({ value, onChange }) => {
  const option = OPTION_THEMES.find((opt) => opt.value !== value);

  return (
    <div className={Styles.switchTheme}>
      <SwitchButton
        key={option.value}
        option={option}
        active={true}
        onSelect={onChange}
        classNames={Styles.switchTheme__switchButton}
      />
    </div>
  );
};
