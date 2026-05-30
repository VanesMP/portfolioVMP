import {
  CtaSection,
  HeroBanner,
  PortfolioSection,
  ProjectsSection,
  TrainingSection,
  BannerAnimation,
} from "@components";
import Styles from "@styles/page.module.scss";

const Home = () => {
  return (
    <div className={Styles.page}>
      <div className={Styles.page__heroBanner}>
        <HeroBanner />
      </div>
      <div className={Styles.page__content}>
        <PortfolioSection />
        <ProjectsSection />
        <div className={Styles.page__trainingSection}>
          <TrainingSection />
        </div>
      </div>
      <CtaSection />
      <BannerAnimation />
    </div>
  );
};

export default Home;
