import React from "react";
import styles from "./style.module.scss";
import Navbar from "../../../Layoutes/Navbar/index";

const Header = () => {
  return (
    <>
      <header className={styles.section}>
        <div className={styles.container}>
          <p className={styles.mainText}>WORK WITH PROFESSIONALS</p>
          <p className={styles.subText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            odio ducimus expedita quod sapiente, ullam minima. Quae, nihil
            soluta suscipit quas numquam dicta magni adipisci vero. Unde culpa
            corrupti est?
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.startButton}>START NOW</button>
            <button className={styles.learnButton}>LEARN MORE</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
