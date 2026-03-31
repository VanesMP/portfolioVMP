import Styles from "./footer.module.scss";

export const Footer = ({ fixPosition }) => {
  return (
    <div className={Styles.banner} id={fixPosition}>
      <div className={Styles.textFooter}>
        <p className={Styles.designed}>Designed by Vanessa MP.</p>
        <p className={Styles.rights}>All rights reserved, 2023</p>
      </div>
    </div>
  );
};
