import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Interview Reports</h1>
      <div className={styles.buttonWrap}>
        <Link className={styles.btn} to="/">
          Candidates
      </Link>
        <Link className={styles.btn} to="/admin">
          Login
      </Link>
      </div>
    </div>
  );
};

export { Header };
