import React from "react";
import Image from "next/image";

import styles from "./ContentCard.module.scss";

type TypeContentCard = {
  color: string;
  image: string;
  title: string;
  description: string;
  buttonText: string;
};

const ContentCard = ({
  color,
  image,
  title,
  description,
  buttonText,
}: TypeContentCard): JSX.Element => {
  return (
    <div className={`${styles.contentCardContainer} ${styles[color]}`}>
      <div>
        <Image src={image} alt={""} />
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <button className={`${styles.contentCardButton} ${styles[color]}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default ContentCard;
