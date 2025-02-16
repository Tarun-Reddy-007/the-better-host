"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./NextEvent.module.css";
import Navbar from "./Navbar";

const eventDate = new Date("2025-03-14T18:00:00").getTime(); // Set your event date and time

const NextEvent = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    function calculateTimeLeft() {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Event started
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    setTimeLeft(calculateTimeLeft()); // Set initial state

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div className={styles.eventContainer}>
      <Navbar />

      {/* Countdown Timer Section */}
      <div className={styles.countdownContainer}>
        <h2 className={styles.countdownTitle}>Next Event In</h2>
        {timeLeft ? (
          <div className={styles.countdownTimer}>
            <span>{timeLeft.days}d</span> : 
            <span>{timeLeft.hours}h</span> : 
            <span>{timeLeft.minutes}m</span> : 
            <span>{timeLeft.seconds}s</span>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Event Details */}
      <div className={styles.eventContent}>
        <h1 className={styles.eventTitle}>Holi Rave Party</h1>
        <Link href="/EventDisplayPage">
          <span className={styles.eventLink}>View Details →</span>
        </Link>
      </div>
    </div>
  );
};

export default NextEvent;
