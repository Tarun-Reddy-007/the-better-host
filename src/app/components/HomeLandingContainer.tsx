import styles from './HomeLandingContainer.module.css';
import CountDownTimer from './CountDownTimer'; 
import EventDisplayText from './EventDisplayText';
import Navbar from './Navbar';

export default function HomeLandingContainer() {
  return (
    <div className={styles.HomeLandingContainer}>
      <Navbar />
      <CountDownTimer /> 
      <EventDisplayText />
    </div>
  );
}
