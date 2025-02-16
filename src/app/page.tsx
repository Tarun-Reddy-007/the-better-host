import HomeCard from './components/HomeCard';
import HomeLandingContainer from './components/HomeLandingContainer';
import HomePageCards from './components/HomePageCards';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeLandingContainer />
      <HomePageCards />
      <HomeCard />
    </div>
  );
}
