// Section3.jsx
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import img from "../../../Components/images/example.png";

const Section3 = () => {
  const images = [img, img, img];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>About Us</h2>
          <pre>
            Gym24 is a leading fitness center located near Grushevka metro
            station, offering over 1500 sq. m of space dedicated to
            top-of-the-line workout equipment from leading brands such as Hammer
            Strength, Life Fitness, and TechnoGym.
            <br />
            <br />
            With affordable membership options, Gym24 is accessible to everyone
            who wants to reach their fitness goals, whether it's building
            strength, increasing endurance, or losing weight.
            <br />
            <br />
            Certified trainers at Gym24 provide expert guidance and support to
            develop personalized workout plans tailored to each individual's
            needs and goals.
          </pre>
        </div>
        <div className={styles.right}>
          <div className={styles.slider}>
            <img
              src={images[currentImage]}
              alt={`Slide ${currentImage + 1}`}
              className={styles.sliderImage}
            />
            <div className={styles.controls}>
              <button className={styles.arrowLeft} onClick={prevSlide}>
                ←
              </button>
              <div className={styles.dots}>
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.dot} ${
                      currentImage === index ? styles.activeDot : ""
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
              <button className={styles.arrowRight} onClick={nextSlide}>
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
