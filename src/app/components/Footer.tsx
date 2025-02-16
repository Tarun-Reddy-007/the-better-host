"use client";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,FaWhatsapp } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const handleAboutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default anchor behavior
  
    if (window.location.pathname !== "/") {
      // Redirect to home and then scroll to About
      router.push("/#about");
    } else {
      // If already on home, just scroll
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.socialIcons}>
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>

        <a href="https://www.instagram.com/thebetterhost.tbh?igsh=MXVpcWV6cjRpZWZ3cw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="mailto:Info@thebetterhost.com" target="_blank" rel="noopener noreferrer"><IoLogoGoogle /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://youtube.com/@tbh.productions?si=LHapNWimi2wFXyKP" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/Events">Events</a>
          <a href="#about" onClick={handleAboutClick}>About</a>
          <a href="#footer">Contact</a>
          <a href="/Gallery">Gallery</a>
        </div>
        <div className={styles.footerColumn}>
          <h3>Contact</h3>
          <p><FaEnvelope /> Info@thebetterhost.com</p>
          <p><FaPhoneAlt /> +91 91082 77157</p>
          <p><FaMapMarkerAlt /> 123, Bengaluru, Karnataka, India</p>
        </div>
        <div className={styles.footerColumn}>
          <h3>Find Us</h3>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.636497778677!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167ff2f9e7b1%3A0x328d4e2b5c1b3e12!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1645409382456!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} The Better Host. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
