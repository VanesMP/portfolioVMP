import NextLink from "next/link";
import Styles from "./Link.module.scss";

export const Link = ({ href, label }) => {
  return (
    <NextLink href={href} className={Styles.link}>
      {label}
    </NextLink>
  );
};
