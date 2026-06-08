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
        <div className={Styles.page__content__sections}>
          <PortfolioSection />
          <ProjectsSection />
          <TrainingSection />
        </div>
      </div>
      <div className={Styles.page__content}>
        <CtaSection />
      </div>
      <BannerAnimation />
    </div>
  );
};

export default Home;
