'use client'
import Link from 'next/link';
import styles from './HomePageCards.module.css';

const HomePageCards = () => {
  const cards = [
    {
      title: "Weddings",
      description: "From intimate ceremonies to extravagant destination weddings, we handle every detail with elegance, ensuring a fairytale experience for couples and their loved ones.",
      tagline: "Where love meets luxury—crafted to perfection.",
      image: "/Event_Images/EI2.jpg",
    },
    {
      title: "Events",
      description: "Stay updated with upcoming events.",
      tagline: "Whether it’s a high-profile corporate gala, a private soirée, or a large-scale festival, we bring creativity and seamless coordination to every event.",
      image: "/Event_Images/EI3.jpg",
    },
    {
      title: "Productions",
      description: "From fashion shows to music festivals, we manage every aspect of event production—stage design, sound, lighting, and artist management—creating immersive experiences that captivate audiences.",
      tagline: "Lights, camera, celebration!",
      image: "/Event_Images/EI4.jpg",
    },
    {
      title: "Experiences",
      description: "We design luxury getaways, private retreats, themed parties, and personalized experiences that go beyond conventional celebrations, making every moment one-of-a-kind.",
      tagline: "Exclusive, immersive, and unforgettable moments.",
      image: "/Event_Images/EI5.jpg",
    },
    {
      title: "Hampers",
      description: "From wedding favors and festive gifts to premium corporate hampers, our handpicked selections are a blend of luxury, tradition, and thoughtful personalization.",
      tagline: "Curated with love, delivered with elegance.",
      image: "/Event_Images/EI6.jpg",
    },
  ];

  const handleContactClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const footerSection = document.getElementById("footer");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <>
    <h1 style={{ fontSize: "350%", color: "#e2d3c0", textAlign: "left", marginTop: "5%", marginLeft:"4%" }}>
      Our Services
    </h1>

    <div className={styles.cardsContainer}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
            <div className={styles.cardImageContainer}>
              <img src={card.image} alt={card.title} className={styles.cardImage} />
              <div className={styles.overlay}>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardDescription}>{card.tagline}</div>
                <div className={styles.cardDescription}>{card.description}</div>
                <div className={styles.exploreButton} onClick={handleContactClick}>
                  Contact us for more info?
                </div>
              </div>
            </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default HomePageCards;
