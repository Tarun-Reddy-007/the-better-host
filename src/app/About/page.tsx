'use client';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Navbar />

      <motion.section 
        className={styles.hero}
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1>Welcome to <span>Our Story</span></h1>
        <p>We innovate, inspire, and transform ideas into reality.</p>
      </motion.section>

      <section className={styles.gridSection}>
        <motion.div 
          className={styles.gridItem} 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <h2>Our Mission</h2>
          <p>Empowering innovation through creativity, technology, and community.</p>
        </motion.div>

        <motion.div 
          className={styles.gridItem} 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          viewport={{ once: true }}
        >
          <h2>Our Vision</h2>
          <p>To be a leader in the industry, crafting groundbreaking experiences.</p>
        </motion.div>

        <motion.div 
          className={styles.gridItem} 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          viewport={{ once: true }}
        >
          <h2>Our Values</h2>
          <p>Innovation, Integrity, Excellence, and Collaboration.</p>
        </motion.div>
      </section>

      <motion.section 
        className={styles.teamSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {[1, 2, 3, 4].map((_, index) => (
            <motion.div 
              key={index} 
              className={styles.teamCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={`https://i.pravatar.cc/150?img=${index + 10}`} alt="Team Member" />
              <h3>John Doe</h3>
              <p>Lead Developer</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
