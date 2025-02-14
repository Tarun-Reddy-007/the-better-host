import styles from "./Footer.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer id="contact" className={styles.footer}>
        <div className={styles.footerContent}>
          <section className={styles.linksSection}>
            <div className={styles.linkRow}>
              <div className={styles.linkItem}>
                <a href="/">HOME</a>
              </div>
              <div className={styles.linkItem}>
                <a href="/Events">EVENTS</a>
              </div>
              <div className={styles.linkItem}>
                <a href="/About">ABOUT</a>
              </div>
              <div className={styles.linkItem}>
                <a href="/Contact">CONTACT</a>
              </div>
              <div className={styles.linkItem}>
                <a href="/Gallery">GALLERY</a>
              </div>
            </div>
          </section>
          <hr className={styles.divider} />

            {/* Contact Information & Map */}
            <div className={styles.contactSection}>
            <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                <FaPhoneAlt className={styles.contactIcon} />
                <p className={styles.contactText}>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                </p>
                </div>

                <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <p className={styles.contactText}>
                    <a href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
                </p>
                </div>

                <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <p className={styles.contactText}>
                    123, MG Road, Bengaluru, India
                </p>
                </div>
            </div>

            <div className={styles.mapContainer}>
                {/* Embedded Google Maps */}
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.961802716347!2d77.5945623!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167b06d5f47f%3A0x74d3f021e6f13a4b!2sMG%20Road%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1641470931275"
                allowFullScreen
                loading="lazy"
                ></iframe>
            </div>
            </div>
            <section className={styles.socialIcons}>
            <a href="#" className={styles.icon}><FaFacebookF /></a>
            <a href="#" className={styles.icon}><FaTwitter /></a>
            <a href="#" className={styles.icon}><FaInstagram /></a>
            <a href="#" className={styles.icon}><FaLinkedin /></a>
            </section>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Copyright: 
          <a href="https://the-better-host.com/" target="_blank"> The Better Host</a>
        </div>
      </footer>
    </div>
  );
}
