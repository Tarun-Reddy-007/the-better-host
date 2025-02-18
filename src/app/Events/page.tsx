'use client';

import { useEffect } from 'react';
import AllEvents from '../components/AllEvents';
import NextEvent from '../components/NextEvent';
import styles from './Events.module.css';

export default function EventsPage() {
  useEffect(() => {
    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundSize = "cover";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundSize = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <NextEvent />
      <AllEvents />
    </div>
  );
}
