"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";  // Import the Navbar component
import styles from "./HomeLandingContainer.module.css";  // Import the styles for this component

const HomeLandingContainer = () => {
  const images = [
    "/Event_Images/EI2.jpg",
    "/Event_Images/EI6.jpg",
    "/Event_Images/EI3.jpg",
    "/Event_Images/EI4.jpg",
    "/Event_Images/EI5.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.container}>
      <Navbar />
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className={styles.overlay}>
        </div>
      </div>
    </div>
  );
};

export default HomeLandingContainer;
