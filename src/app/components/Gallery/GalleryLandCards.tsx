// src/components/GalleryLandCards.tsx
import styles from './GalleryLandCards.module.css';

const GalleryLandCards = () => {
  return (
    <div className={styles.cHeroImageGrid}>
      <div className={styles.container}>
        <div className={styles.column}></div>
        <div className={styles.column}>
          <div className={styles.row}></div>
          <div className={styles.row}>
            <div>
              <div className={styles.text}>
                <h6>
                  Gallery
                </h6>
              </div>
            </div>
            <div></div>
          </div>
          <div className={styles.row}></div>
        </div>
      </div>
    </div>
  );
};

export default GalleryLandCards;
