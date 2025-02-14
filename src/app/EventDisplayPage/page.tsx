// src/app/contact.tsx
import Navbar from '../components/Navbar';
import styles from './EventDisplayPage.module.css';

export default function EventDisplayPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>Event Display Page</h1>
      <p className={styles.description}>Join us in the event.</p>
    </div>
  );
}
