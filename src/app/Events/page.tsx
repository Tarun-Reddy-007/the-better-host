'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from './Events.module.css';

interface EventCard {
  title: string;
  image: string;
  price: string;
  date: string;
}

const upcomingEvents: EventCard[] = [
  { title: "Holi Festival 2K25", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 1500", date: "16 March 2025" },
  { title: "Spring Fest 2K25", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 1200", date: "25 March 2025" },
  { title: "Summer Bash 2K25", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 1800", date: "10 April 2025" },
  { title: "Beach Party 2K25", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 2000", date: "5 May 2025" },
  { title: "Food Fest 2K25", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 1000", date: "20 June 2025" },
  { title: "Concert Night 2K25", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 2500", date: "15 July 2025" },
];

const ongoingEvents: EventCard[] = [
  { title: "Music Fest 2025", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 2000", date: "12 February 2025" },
  { title: "Dance Carnival 2025", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 1600", date: "20 February 2025" },
  { title: "Art Expo 2025", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 900", date: "28 February 2025" },
  { title: "Food Festival 2025", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 1400", date: "3 March 2025" },
  { title: "Marathon 2025", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 500", date: "10 March 2025" },
  { title: "Book Fair 2025", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 800", date: "15 March 2025" },
];

const pastEvents: EventCard[] = [
  { title: "Diwali Mela 2024", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 1000", date: "10 November 2024" },
  { title: "Christmas Eve 2024", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 1300", date: "24 December 2024" },
  { title: "New Year Party 2025", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 1800", date: "31 December 2024" },
  { title: "Republic Day 2025", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 900", date: "26 January 2025" },
  { title: "Valentine's Ball 2025", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 1500", date: "14 February 2025" },
  { title: "Spring Carnival 2025", image: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg", price: "INR 1200", date: "5 March 2025" },
];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState<'ongoing' | 'upcoming' | 'past'>('ongoing');

  const renderEvents = () => {
    switch (selectedCategory) {
      case 'ongoing':
        return ongoingEvents;
      case 'upcoming':
        return upcomingEvents;
      case 'past':
        return pastEvents;
      default:
        return [];
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <div className={styles.buttonGroup}>
        <button className={selectedCategory === 'ongoing' ? styles.active : ''} onClick={() => setSelectedCategory('ongoing')}>Ongoing Events</button>
        <button className={selectedCategory === 'upcoming' ? styles.active : ''} onClick={() => setSelectedCategory('upcoming')}>Upcoming Events</button>
        <button className={selectedCategory === 'past' ? styles.active : ''} onClick={() => setSelectedCategory('past')}>Past Events</button>
      </div>

      <div className={styles.eventsSection}>
        <div className={styles.cardsWrapper}>
          {renderEvents().map((card, index) => (
            <EventCardComponent key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

const EventCardComponent = ({ title, image, price, date }: EventCard) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h2>{title}</h2>
      <div className={styles.cardDetails}>
        <span>{price}</span>
        <span>{date}</span>
      </div>
      <button className={styles.viewMore} onClick={() => window.location.href = "/event-details"}>
        View More
      </button>
    </div>
  );
};
