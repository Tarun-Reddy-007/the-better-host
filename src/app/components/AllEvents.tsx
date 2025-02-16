"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./AllEvents.module.css";
import { useRouter } from "next/navigation"; 

const eventsData = {
  ongoing: [
    {
      id: 1,
      name: "Sunburn Beach Party",
      price: "₹1999",
      date: "Feb 20, 2025",
      image: "/Event_Images/EI1.jpg",
      link: "/EventDisplayPage",
      time: "3:30 pm",
      duration: "6 hours 30 minutes",
      Age_Limit: "18yrs +",
      Languages: ["English, Hindi"], 
      Location: "Phoenix Market City, Bengaluru", 
      About: "A highly anticipated concert with the following djs. ",
      poster: "/poster-1.png",
      Images: ["/Event_Images/EI2.jpg", "/Event_Images/EI3.jpg", "/Event_Images/EI4.jpg", "/Event_Images/EI5.jpg", "/Event_Images/EI6.jpg", "/Event_Images/EI1.jpg", "/Event_Images/EI2.jpg", "/Event_Images/EI3.jpg", "/Event_Images/EI4.jpg"],
      paytm_link: "xyz.com",
      bms_link: "xyz.com"
    },
    {
      id: 2,
      name: "EDM Night",
      price: "₹1499",
      date: "Feb 22, 2025",
      image: "/Event_Images/EI2.jpg",
      link: "/EventDisplayPage",
      time: "3:30 pm",
      duration: "6 hours 30 minutes",
      Age_Limit: "18yrs +",
      Languages: ["English, Hindi"], 
      Location: "Phoenix Market City, Bengaluru", 
      About: "A highly anticipated concert with the following djs. ",
      poster: "/post1.jpg",
      Images: ["/abc1.jpg", "/abc2.jpg", "/abc3.jpg"],
      paytm_link: "xyz.com",
      bms_link: "xyz.com"
    },
    {
      id: 3,
      name: "Bollywood Retro Night",
      price: "₹999",
      date: "Feb 25, 2025",
      image: "/Event_Images/EI3.jpg",
      link: "/EventDisplayPage",
      time: "3:30 pm",
      duration: "6 hours 30 minutes",
      Age_Limit: "18yrs +",
      Languages: ["English, Hindi"], 
      Location: "Phoenix Market City, Bengaluru", 
      About: "A highly anticipated concert with the following djs. ",
      poster: "/post1.jpg",
      Images: ["/abc1.jpg", "/abc2.jpg", "/abc3.jpg"],
      paytm_link: "xyz.com",
      bms_link: "xyz.com"
    },
  ],
  upcoming: [
    {
      id: 4,
      name: "Holi Festival",
      price: "₹2499",
      date: "March 24, 2025",
      image: "/Event_Images/EI1.jpg",
      link: "/EventDisplayPage",
      time: "3:30 pm",
      duration: "6 hours 30 minutes",
      Age_Limit: "18yrs +",
      Languages: ["English, Hindi"], 
      Location: "Phoenix Market City, Bengaluru", 
      About: "A highly anticipated concert with the following djs. ",
      poster: "/post1.jpg",
      Images: ["/abc1.jpg", "/abc2.jpg", "/abc3.jpg"],
      paytm_link: "xyz.com",
      bms_link: "xyz.com"
    },
    {
      id: 5,
      name: "Summer Music Fest",
      price: "₹2999",
      date: "April 10, 2025",
      image: "/Event_Images/EI2.jpg",
      link: "/EventDisplayPage",
      time: "3:30 pm",
      duration: "6 hours 30 minutes",
      Age_Limit: "18yrs +",
      Languages: ["English, Hindi"], 
      Location: "Phoenix Market City, Bengaluru", 
      About: "A highly anticipated concert with the following djs. ",
      poster: "/post1.jpg",
      Images: ["/abc1.jpg", "/abc2.jpg", "/abc3.jpg"],
      paytm_link: "xyz.com",
      bms_link: "xyz.com"
    },
    {
      id: 6,
      name: "Rock Concert",
      price: "₹1799",
      date: "May 15, 2025",
      image: "/Event_Images/EI3.jpg",
      link: "/EventDisplayPage",
      time: "3:30 pm",
      duration: "6 hours 30 minutes",
      Age_Limit: "18yrs +",
      Languages: ["English, Hindi"], 
      Location: "Phoenix Market City, Bengaluru", 
      About: "A highly anticipated concert with the following djs. ",
      poster: "/post1.jpg",
      Images: ["/abc1.jpg", "/abc2.jpg", "/abc3.jpg"],
      paytm_link: "xyz.com",
      bms_link: "xyz.com"
    },
  ],
  past: [
    {
      id: 7,
      name: "Christmas Party",
      price: "₹1299",
      date: "Dec 25, 2024",
      image: "/Event_Images/EI1.jpg",
      link: "/EventDisplayPage",
      time: "3:30 pm",
      duration: "6 hours 30 minutes",
      Age_Limit: "18yrs +",
      Languages: ["English, Hindi"], 
      Location: "Phoenix Market City, Bengaluru", 
      About: "A highly anticipated concert with the following djs. ",
      poster: "/post1.jpg",
      Images: ["/abc1.jpg", "/abc2.jpg", "/abc3.jpg"],
      paytm_link: "xyz.com",
      bms_link: "xyz.com"
    },
    {
      id: 8,
      name: "New Year Bash",
      price: "₹1999",
      date: "Jan 1, 2025",
      image: "/Event_Images/EI2.jpg",
      link: "/EventDisplayPage",
      time: "3:30 pm",
      duration: "6 hours 30 minutes",
      Age_Limit: "18yrs +",
      Languages: ["English, Hindi"], 
      Location: "Phoenix Market City, Bengaluru", 
      About: "A highly anticipated concert with the following djs. ",
      poster: "/post1.jpg",
      Images: ["/abc1.jpg", "/abc2.jpg", "/abc3.jpg"],
      paytm_link: "xyz.com",
      bms_link: "xyz.com"
    },
    {
      id: 9,
      name: "Valentine’s Eve",
      price: "₹1599",
      date: "Feb 14, 2025",
      image: "/Event_Images/EI3.jpg",
      link: "/EventDisplayPage",
      time: "3:30 pm",
      duration: "6 hours 30 minutes",
      Age_Limit: "18yrs +",
      Languages: ["English, Hindi"], 
      Location: "Phoenix Market City, Bengaluru", 
      About: "A highly anticipated concert with the following djs. ",
      poster: "/poster-1.jpg",
      Images: ["/abc1.jpg", "/abc2.jpg", "/abc3.jpg"],
      paytm_link: "xyz.com",
      bms_link: "xyz.com"
    },
  ],
};

const AllEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState<"ongoing" | "upcoming" | "past">("ongoing");
  const router = useRouter();

  return (
    <div className={styles.allEventsContainer}>
      <div className={styles.buttonsContainer}>
        {["ongoing", "upcoming", "past"].map((category) => (
          <button
            key={category}
            className={`${styles.eventButton} ${selectedCategory === category ? styles.activeButton : ""}`}
            onClick={() => setSelectedCategory(category as "ongoing" | "upcoming" | "past")}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} Events
          </button>
        ))}
      </div>
      <div className={styles.eventsWrapper}>
        <div className={styles.eventsContainer}>
          {eventsData[selectedCategory].map((event) => (
            <div key={event.id} className={styles.eventCard} style={{ backgroundImage: `url(${event.image})` }}>
              <div className={styles.eventDetails}>
                <h3 className={styles.eventName}>{event.name}</h3>
                <div className={styles.eventInfo}>
                  <span className={styles.eventPrice}>{event.price}</span>
                  <span className={styles.eventDate}>{event.date}</span>
                </div>
                <Link
                href={{
                    pathname: "/EventDisplayPage",
                    query: { id: event.id },
                }}
                className={styles.viewEvent}
                >
                View Event →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
