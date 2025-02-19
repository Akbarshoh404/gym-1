import React from "react";

import styles from "./style.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <p>GYMTEAM</p>
          </div>

          <div className={styles.navigation}>
            <p>Home</p>

            <p>Shop</p>

            <p>Blog</p>

            <p>Contact</p>
          </div>

          <div className={styles.div}>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
