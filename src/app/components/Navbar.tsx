"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import styles from "./Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    setMobileMenuOpen(false); // Close mobile menu if open
  };
  

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.sticky : ""}`}>
      <div className={styles.logo}>
        <img src="/tbh-logo-no-bg.png" alt="Logo" className={styles.logoImage} />
        <span>The Better Host</span>
      </div>
      <div className={styles.navLinks}>
        <a href="/" className={styles.link}>Home</a>
        <a href="/Events" className={styles.link}>Events</a>
        <a href="#about" className={styles.link} onClick={handleAboutClick}>About</a>
        <a href="/Gallery" className={styles.link}>Gallery</a>
        <a href="#footer" className={styles.link}>Contact</a>
      </div>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        <FiMenu size={24} />
      </div>
      {isMobileMenuOpen && (
        <>
          <div className={styles.overlay} onClick={toggleMobileMenu}></div>
          <div className={styles.mobileMenu}>
            <button className={styles.closeButton} onClick={toggleMobileMenu}>
              <FiX size={24} />
            </button>
            <a href="/" className={styles.mobileLink} onClick={toggleMobileMenu}>Home</a>
            <a href="/Events" className={styles.mobileLink} onClick={toggleMobileMenu}>Events</a>
            <a href="#about" className={styles.mobileLink} onClick={handleAboutClick}>About</a>
            <a href="/Gallery" className={styles.mobileLink} onClick={toggleMobileMenu}>Gallery</a>
            <a href="#footer" className={styles.mobileLink} onClick={toggleMobileMenu}>Contact</a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
