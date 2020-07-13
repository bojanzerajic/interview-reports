import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.paragraph_wrap}>
        <p>&copy; 2020 BIT | All rights reserved.</p>
      </div>
    </div>
  );
};

export { Footer };
