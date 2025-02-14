import styles from "./EventDisplayText.module.css";
import LandingPurchaseButton from "./LandingPurchaseButton";

export default function EventDisplayText() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.textContent}>
        <span className={styles.text}>
          Holi Festival Event 2K25<br/>
          <span className={styles.lineBreak}>@ Bengaluru</span>
        </span>
        <LandingPurchaseButton />
      </div>
    </div>
  );
}
