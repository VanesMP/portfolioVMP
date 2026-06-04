import Image from "next/image";
import Styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={Styles.logo}>
      <Image src="/logovmp.jpg" alt="Logo" width={50} height={50} className={Styles.logo__image} />;
      <div className={Styles.logo__overlay} />
    </div>
  );
};
