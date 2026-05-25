import Styles from "./HeroBanner.module.scss";
import Image from "next/image";

export const HeroBanner = () => {
  return (
    <div className={Styles.heroBanner}>
      <Image
        src="/images/identity/pict-dev.webp"
        alt="identity picture"
        className={Styles.heroBanner__image}
        width={256}
        height={320}
        quality={75}
        priority
      />
      <div className={Styles.heroBanner__content}>
        <h1 className={Styles.heroBanner__title}>Crafting Digital Experiences That Matter</h1>
        <span className={Styles.heroBanner__subtitle}>
          After several years of art studies and co-founding an artists' collective in Toulouse, I
          gave my career a new direction by transitioning into front-end development, specializing
          in React. For more than two years at Kotzilla, a startup based in Toulouse, I combined
          front-end development and product design to design and develop elegant, functional user
          experiences.
        </span>
        <div></div>
      </div>
    </div>
  );
};
