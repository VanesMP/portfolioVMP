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
      <div className={Styles.page__heroBanner} id="about">
        <HeroBanner />
      </div>
      <div className={Styles.page__content} id="projects">
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
