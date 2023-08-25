import React from "react";

import styles from "./page.module.scss";

import ContentCard from "./components/ContentCard/ContentCard";

import iconSedans from "../../public/images/icon-sedans.svg";
import iconSuvs from "../../public/images/icon-suvs.svg";
import iconLuxury from "../../public/images/icon-luxury.svg";

const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <ContentCard
        color={"orange"}
        image={iconSedans}
        title={"Sedans"}
        description={`Choose a sedan for its affordability and excellent fuel economy.
      Ideal for cruising in the city or on your next road trip.`}
        buttonText={"Learn More"}
      />
      <ContentCard
        color={"teal"}
        image={iconSuvs}
        title={"SUVs"}
        description={`Take an SUV for its spacious interior, power, and versatility.
        Perfect for your next family vacation and off-road adventures.`}
        buttonText={"Learn More"}
      />
      <ContentCard
        color={"darkTeal"}
        image={iconLuxury}
        title={"Luxury"}
        description={`Cruise in the best car brands without the bloated prices. Enjoy the enhanced
        comfort of a luxury rental and arrive in style.`}
        buttonText={"Learn More"}
      />
    </main>
  );
};

export default Home;
