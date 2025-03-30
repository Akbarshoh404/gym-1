// Section2.jsx
import React from "react";
import styles from "./style.module.scss";

const Section2 = () => {
  const membershipPlans = [
    {
      price: "$29",
      description: "Basic Plan",
      opportunities: ["Gym Access", "Locker Room", "24/7 Support"],
    },
    {
      price: "$49",
      description: "Standard Plan",
      opportunities: [
        "Gym Access",
        "Group Classes",
        "Locker Room",
        "24/7 Support",
      ],
    },
    {
      price: "$79",
      description: "Premium Plan",
      opportunities: [
        "Personal Trainer",
        "Gym Access",
        "Group Classes",
        "Locker Room",
        "24/7 Support",
      ],
    },
    {
      price: "$99",
      description: "Elite Plan",
      opportunities: [
        "Unlimited Personal Training",
        "Gym Access",
        "Group Classes",
        "Nutrition Plan",
        "Locker Room",
      ],
    },
    {
      price: "$39",
      description: "Weekend Plan",
      opportunities: ["Weekend Access", "Group Classes", "Locker Room"],
    },
    {
      price: "$59",
      description: "Morning Plan",
      opportunities: [
        "Morning Access (5AM-12PM)",
        "Group Classes",
        "Locker Room",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Gym Membership Plans</h2>
        <div className={styles.cards}>
          {membershipPlans.map((plan, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.description}>{plan.description}</h3>
              <p className={styles.price}>{plan.price}</p>
              <ul className={styles.opportunities}>
                {plan.opportunities.map((opportunity, oppIndex) => (
                  <li key={oppIndex}>{opportunity}</li>
                ))}
              </ul>
              <button className={styles.buyButton}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
