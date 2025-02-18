"use client";
import { useEffect } from 'react';
import HomeCard from './components/HomeCard';
import HomeLandingContainer from './components/HomeLandingContainer';
import HomePageCards from './components/HomePageCards';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
        document.body.style.background = "url('/Event_Images/EI3.jpg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    
        return () => {
          document.body.style.backgroundColor = "";
          document.body.style.backgroundSize = "";
        };
      }, []);
  return (
    
    <div className={styles.container}>
      <HomeLandingContainer />
      <HomePageCards />
      <HomeCard />
    </div>
  );
}
