import Image from "next/image";
import Styles from "./Logo.module.scss";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/#about" className={Styles.logo}>
      <Image src="/logovmp.jpg" alt="Logo" width={50} height={50} className={Styles.logo__image} />;
      <div className={Styles.logo__overlay} />
    </Link>
  );
};
