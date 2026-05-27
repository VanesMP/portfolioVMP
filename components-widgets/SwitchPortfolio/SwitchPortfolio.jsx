import clsx from "clsx";
import Styles from "./SwitchPortfolio.module.scss";
import { SwitchButton } from "../../components-shared/SwitchButton/SwitchButton";

export const SwitchPortfolio = ({ options, value, onChange }) => {
  return (
    <div className={Styles.SwitchPortfolio}>
      {options.map((opt) => (
        <SwitchButton
          key={opt.value}
          option={opt}
          active={value === opt.value}
          onSelect={onChange}
          classNames={clsx(Styles.SwitchPortfolio__switchButton, {
            [Styles["SwitchPortfolio__switchButton--active"]]: value === opt.value,
          })}
        />
      ))}
    </div>
  );
};
