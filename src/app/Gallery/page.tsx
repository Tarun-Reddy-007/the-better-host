// src/app/gallery.tsx
import GalleryLandCards from '../components/Gallery/GalleryLandCards';
import GalleryRect from '../components/Gallery/GalleryRect';
import Navbar from '../components/Navbar';
import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <div className={styles.container}>
      <Navbar />
      <GalleryLandCards />

      <div className={styles.gallerySection}>
        <h2 className={styles.heading}>Top Event Images</h2>
        <GalleryRect />
      </div>
    </div>
  );
}
