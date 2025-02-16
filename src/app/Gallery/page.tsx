"use client";
import styles from "./Gallery.module.css";
import Navbar from "../components/Navbar";
import ImageGrid from "../components/ImageGrid1";

const Gallery = () => {
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
