"use client";
import { useEffect } from 'react';
import styles from "./Gallery.module.css";
import Navbar from "../components/Navbar";
import ImageGrid from "../components/ImageGrid1";

const Gallery = () => {
  useEffect(() => {
      document.body.style.backgroundColor = "#e2d3c0";
      document.body.style.backgroundSize = "cover";
  
      return () => {
        document.body.style.backgroundColor = "";
        document.body.style.backgroundSize = "";
      };
    }, []);
  return (
    <div className={styles.galleryContainer}>
      <Navbar />
      <div className={styles.backgroundSection}></div>
      <div className={styles.contentContainer}>
        <ImageGrid />
      </div>
    </div>
  );
};

export default Gallery;
