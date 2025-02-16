import AllEvents from '../components/AllEvents';
import NextEvent from '../components/NextEvent';
import styles from './Events.module.css';

export default function EventsPage() {
  return (
    <div className={styles.container}>
      <NextEvent />
      <AllEvents />
    </div>
  );
}
