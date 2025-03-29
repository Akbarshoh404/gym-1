import React from "react";
import styles from "./style.module.scss";

const Section1 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Reasons to Join</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.cardTexts}>
              <h3>4 Fitness Zones</h3>
              <p>
                From Cardio to functional and cycle. Separate area for boxing
                and mixed martial arts.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.cardTexts}>
              <h3>Expert Trainers</h3>
              <p>
                Certified professionals to guide you through your fitness
                journey with personalized plans.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.cardTexts}>
              <h3>Modern Equipment</h3>
              <p>
                State-of-the-art machines and tools to maximize your workout
                efficiency.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.cardTexts}>
              <h3>Community Events</h3>
              <p>
                Join group classes and social events to stay motivated and
                connected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
