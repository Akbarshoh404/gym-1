import React, { useState } from "react";
import styles from "./style.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <p>GYMTEAM</p>
          </div>

          <div className={styles.navLinks}>
            <p>Home</p>
            <p>Shop</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>

          <div className={styles.div}>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <div
                className={`${styles.bar} ${isOpen ? styles.open : ""}`}
              ></div>
              <div
                className={`${styles.bar} ${isOpen ? styles.open : ""}`}
              ></div>
              <div
                className={`${styles.bar} ${isOpen ? styles.open : ""}`}
              ></div>
            </div>
          </div>

          <div
            className={`${styles.navigation} ${isOpen ? styles.active : ""}`}
          >
            <p>Home</p>
            <p>Shop</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
