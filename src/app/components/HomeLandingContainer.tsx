"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";  
import styles from "./HomeLandingContainer.module.css";  
import Image from "next/image"; 

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
      <div className={styles.background}>
        <Image 
          src={images[currentImage]} 
          alt="Event Image" 
          layout="fill"  
          objectFit="cover"
        />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default HomeLandingContainer;
