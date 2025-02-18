"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import styles from "./Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image"; 
import Link from "next/link"; 

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
    event.preventDefault();
    if (window.location.pathname !== "/") {
      router.push("/#about");
    } else {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.sticky : ""}`}>
      <div className={styles.logo}>
        <Image
          src="/tbh-logo-no-bg.png"
          alt="Logo"
          className={styles.logoImage}
          width={100} // Set the width
          height={100} // Set the height
        />
        <span>The Better Host</span>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/Events" className={styles.link}>Events</Link>
        <a href="#about" className={styles.link} onClick={handleAboutClick}>About</a>
        <Link href="/Gallery" className={styles.link}>Gallery</Link>
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
            <Link href="/" className={styles.mobileLink} onClick={toggleMobileMenu}>Home</Link>
            <Link href="/Events" className={styles.mobileLink} onClick={toggleMobileMenu}>Events</Link>
            <a href="#about" className={styles.mobileLink} onClick={handleAboutClick}>About</a>
            <Link href="/Gallery" className={styles.mobileLink} onClick={toggleMobileMenu}>Gallery</Link>
            <a href="#footer" className={styles.mobileLink} onClick={toggleMobileMenu}>Contact</a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;