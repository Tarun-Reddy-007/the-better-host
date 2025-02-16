'use client'

import { useState } from "react";
import styles from "./HomeCard.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    title: "About Us",
    tagline: "Crafting unforgettable moments, one event at a time.",
    content: "At The Better Host, we bring dreams to life with bespoke event planning, luxury experiences, and seamless execution. Whether it’s a grand wedding, a high-energy festival, or an exclusive corporate affair, we curate extraordinary celebrations that leave a lasting impression. With a passion for perfection and an eye for detail, we don’t just host events—we create unparalleled experiences."

  },
  {
    title: "Our Mission",
    tagline: "Redefining celebrations, setting new standards in luxury and innovation.",
    content: "Our vision is to become India’s most sought-after event planning and experience curation company, known for its creativity, precision, and trendsetting concepts. We strive to craft events that are not just attended but remembered forever."
  },
  {
    title: "Our Vision",
    tagline: "Bringing creativity, excellence, and emotion to every event we design.",
    content: "At The Better Host, our mission is to transform ideas into extraordinary experiences by combining luxury, innovation, and seamless execution. We are committed to providing highly personalized, world-class events, ensuring that every celebration is unique, stress-free, and flawlessly delivered."
  }
];

export default function HomeCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="about" className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>{cards[currentIndex].title}</h1>
          <p className={styles.tagline}>{cards[currentIndex].tagline}</p>
        </div>
        <div className={styles.right}>
          <p>{cards[currentIndex].content}</p>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <button className={styles.arrow} onClick={prevCard}><FaArrowLeft /></button>
        <button className={styles.arrow} onClick={nextCard}><FaArrowRight /></button>
      </div>
    </div>
    
  );
}