import { ButtonLink } from "@shared/ButtonLink";
import Styles from "./GroupButtons.module.scss";

export const GroupButtons = ({ options = [] }) => {
  return (
    <div className={Styles.groupButtons}>
      {options.map((opt) => (
        <ButtonLink
          key={opt.labelKey}
          labelButtonLink={opt.labelKey}
          pathLink={opt.path}
          variant={opt.variant}
          iconName={opt.iconName}
        />
      ))}
    </div>
  );
};
