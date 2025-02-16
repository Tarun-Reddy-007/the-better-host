"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./EventDisplayPage.module.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

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

const allEvents = [...eventsData.ongoing, ...eventsData.upcoming, ...eventsData.past];

const EventDisplayPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const foundEvent = allEvents.find((e) => e.id.toString() === id);
      setEvent(foundEvent || null);
    }
  }, [id]);

  if (!event) {
    return (
      <div className={styles.eventPage}>
        <h2>Event Not Found</h2>
      </div>
    );
  }

  return (
    <div className={styles.eventdisplaypage}>
      <Navbar />
      <div className={styles.backgroundSection}></div>
      <div className={styles.eventContent}>
        <div className={styles.eventDetailsWrapper}>
          <div className={styles.eventImage}>
            <Image 
              src={event.poster} 
              alt="Event Image" 
              width={300} 
              height={500}
              className={styles.eventMainImage} 
            />
          </div>
          <div className={styles.eventDetails}>
          <h1 style={{fontSize: "250%"}}>{event.name}</h1>
          <p className={styles.price} style={{ fontSize: "200%", fontWeight: "bold", color: "#e2d3c0", marginBottom: "5px" }}>
            {event.price}
          </p>
          <p className={styles.date} style={{ fontSize: "130%", fontWeight: "bold", color: "#e2d3c0", marginBottom: "5px" }}>
            {event.date}
          </p>
          <p className={styles.time} style={{ fontSize: "160%", fontWeight: "bold", color: "#e2d3c0", marginBottom: "5px" }}>
            {event.time}
          </p>
          <p className={styles.duration} style={{ fontSize: "140%", fontWeight: "bold", color: "#e2d3c0", marginBottom: "5px" }}>
            {event.duration}
          </p>
          <p className={styles.age_limit} style={{ fontSize: "180%", fontWeight: "bold", color: "#e2d3c0", marginBottom: "5px" }}>
            {event.Age_Limit}
          </p>
          <p className={styles.languages} style={{ fontSize: "120%", fontWeight: "bold", color: "#e2d3c0", marginBottom: "5px" }}>
            {event.Languages.join(", ")}
          </p>
          <p className={styles.location} style={{ fontSize: "120%", fontWeight: "bold", color: "#e2d3c0", marginBottom: "5px" }}>
            <strong>Location : </strong> 
            <Link 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.Location)}`} 
              target="_blank"
              className={styles.mapLink}
            >
              {event.Location}
            </Link>
          </p>
          <div className={styles.buyNow}>
            <span className={styles.grab} style={{ fontSize: "140%", fontWeight: "bold", color: "#e2d3c0", marginBottom: "5px" }}>Grab your passes now!</span>
            <Link href={event.paytm_link} target="_blank">
              <Image src="/paytm.png" alt="Paytm" width={200} height={50} />
            </Link>
            <Link href={event.bms_link} target="_blank">
              <Image src="/bms.png" alt="BookMyShow" width={200} height={50} />
            </Link>
          </div>
        </div>
        </div>
        <div className={styles.aboutEvent}>
          <h2>About Event</h2>
          <p>{event.About}</p>
        </div>
        <div className={styles.imageGallery}>
          {event.Images.map((img: string, index: number) => (
            <Image 
              key={index} 
              src={img} 
              alt={`Event Image ${index + 1}`} 
              width={300} 
              height={200} 
              className={styles.galleryImage} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDisplayPage;
