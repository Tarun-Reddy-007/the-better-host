'use client';

import styles from './Navbar.module.css';

export default function Navbar() {
  const handleScrollToFooter = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default link behavior
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to footer
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <a href="/">
          <img src="/tbh-logo-no-bg.png" alt="Logo" className={styles.logoImage} />
        </a>
      </div>
      <ul className={styles.navList}>
        <li><a href="/">Home</a></li>
        <li><a href="/Events">Events</a></li>
        <li><a href="/About">About</a></li>
        {/* Modified the Contact link to trigger smooth scroll */}
        <li><a href="#" onClick={handleScrollToFooter}>Contact</a></li>
        <li><a href="/Gallery">Gallery</a></li>
      </ul>
    </div>
  );
}
