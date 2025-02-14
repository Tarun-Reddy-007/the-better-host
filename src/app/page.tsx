import HomeLandingContainer from './components/HomeLandingContainer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeLandingContainer />
    </div>
  );
}
