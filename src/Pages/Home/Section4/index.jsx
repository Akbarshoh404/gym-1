// Section4.jsx
import React from "react";
import styles from "./style.module.scss";
import img from "../../../Components/images/trainer.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Section4 = () => {
  const trainers = [
    {
      name: "John Doe",
      image: img,
      social: {
        facebook: "https://facebook.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
    },
    {
      name: "Jane Smith",
      image: img,
      social: {
        facebook: "https://facebook.com/janesmith",
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
      },
    },
    {
      name: "Mike Johnson",
      image: img,
      social: {
        facebook: "https://facebook.com/mikejohnson",
        twitter: "https://twitter.com/mikejohnson",
        instagram: "https://instagram.com/mikejohnson",
      },
    },
    {
      name: "Emily Brown",
      image: img,
      social: {
        facebook: "https://facebook.com/emilybrown",
        twitter: "https://twitter.com/emilybrown",
        instagram: "https://instagram.com/emilybrown",
      },
    },
    {
      name: "Alex Wilson",
      image: img,
      social: {
        facebook: "https://facebook.com/alexwilson",
        twitter: "https://twitter.com/alexwilson",
        instagram: "https://instagram.com/alexwilson",
      },
    },
    {
      name: "Sarah Davis",
      image: img,
      social: {
        facebook: "https://facebook.com/sarahdavis",
        twitter: "https://twitter.com/sarahdavis",
        instagram: "https://instagram.com/sarahdavis",
      },
    },
    {
      name: "Tom Miller",
      image: img,
      social: {
        facebook: "https://facebook.com/tommiller",
        twitter: "https://twitter.com/tommiller",
        instagram: "https://instagram.com/tommiller",
      },
    },
    {
      name: "Lisa Anderson",
      image: img,
      social: {
        facebook: "https://facebook.com/lisaanderson",
        twitter: "https://twitter.com/lisaanderson",
        instagram: "https://instagram.com/lisaanderson",
      },
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Trainers Staff</h2>
        <div className={styles.cards}>
          {trainers.map((trainer, index) => (
            <div key={index} className={styles.card}>
              <img
                src={trainer.image}
                alt={trainer.name}
                className={styles.cardImage}
              />
              <h3 className={styles.cardName}>{trainer.name}</h3>
              <div className={styles.socialLinks}>
                <a
                  href={trainer.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className={styles.socialIcon} />
                </a>
                <a
                  href={trainer.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className={styles.socialIcon} />
                </a>
                <a
                  href={trainer.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className={styles.socialIcon} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
