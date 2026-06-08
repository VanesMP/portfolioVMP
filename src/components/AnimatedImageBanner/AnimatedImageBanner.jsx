import Styles from "./AnimatedImageBanner.module.scss";
import Image from "next/image";

export const AnimatedImageBanner = () => {
  return (
    <div className={Styles.animatedImageBanner}>
      <div className={Styles.animatedImageBanner__ring1} />
      <div className={Styles.animatedImageBanner__ring2} />
      <div className={Styles.animatedImageBanner__ring3} />
      <div className={Styles.animatedImageBanner__imageWrapper}>
        <Image
          src="/images/identity/pict-dev.webp"
          alt="identity picture"
          width={240}
          height={300}
          priority
          className={Styles.animatedImageBanner__image}
        />
        <div className={Styles.animatedImageBanner__imageOverlay} />
      </div>
    </div>
  );
};
