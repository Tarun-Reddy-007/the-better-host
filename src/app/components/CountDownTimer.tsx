'use client'; // Add this directive to indicate the component is for client-side rendering

import { useState, useEffect } from 'react';
import styles from './CountDownTimer.module.css';  // Import the styles

const CountDownTimer = () => {
  // Set your event date here
  const eventDate = new Date("2025-03-14T23:59:59");  // Example: Event Date

  // A function to calculate the time difference
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    let days = Math.floor(difference / (1000 * 3600 * 24));
    let hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));
    let minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Only update state in the client-side
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles['countdown-timer']}>
      <div className={styles['countdown-item']}>
        <span className={styles['time']}>{timeLeft.days}</span>
        <span className={styles['label']}>Days</span>
      </div>
      <div className={styles['countdown-item']}>
        <span className={styles['time']}>{timeLeft.hours}</span>
        <span className={styles['label']}>Hours</span>
      </div>
      <div className={styles['countdown-item']}>
        <span className={styles['time']}>{timeLeft.minutes}</span>
        <span className={styles['label']}>Minutes</span>
      </div>
      <div className={styles['countdown-item']}>
        <span className={styles['time']}>{timeLeft.seconds}</span>
        <span className={styles['label']}>Seconds</span>
      </div>
    </div>
  );
};

export default CountDownTimer;
