import Styles from "./SectionLayout.module.scss";
import { ContentCard } from "@shared/ContentCard";

export const SectionLayout = ({ intro, title, description, children }) => {
  return (
    <div className={Styles.sectionLayout}>
      <ContentCard
        intro={intro}
        title={title}
        description={description}
        className={Styles.sectionLayout__text}
      />
      {children}
    </div>
  );
};
