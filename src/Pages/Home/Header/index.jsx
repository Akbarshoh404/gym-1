import React from "react";

import styles from "./style.module.scss";

import Navbar from "../../../Layoutes/Navbar/index";

const Header = () => {
  return (
    <>
      <header className={styles.section}>
        <Navbar />
        <div className={styles.container}></div>
      </header>
    </>
  );
};

export default Header;
