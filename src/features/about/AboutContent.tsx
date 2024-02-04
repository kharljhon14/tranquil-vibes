import styles from './aboutContent.module.css';
import { motion } from 'framer-motion';

export default function AboutContent() {
  return (
    <div className={styles.aboutUs}>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="/about-us.png"
        alt="Girl taking care of platns"
      />

      <div className={styles.content}>
        <motion.h2
          initial={{ transform: 'translateY(300px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{ transform: 'translateY(300px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className={styles.introduction}
        >
          <h3>Introduction</h3>
          <p>
            Step into a world of tranquility at TranquilVibes, where self-care isn't just a practice
            but a gentle, soothing journey. As the pace of life accelerates, we recognize the
            profound importance of finding solace, relaxation, and peace within. TranquilVibes is
            born out of a vision to create a digital sanctuary, a serene haven where you can escape,
            recalibrate, and prioritize your mental and physical well-being.
          </p>
        </motion.div>

        <motion.div
          initial={{ transform: 'translateY(300px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className={styles.introduction}
        >
          <h3>Our Mission</h3>
          <p>
            At the heart of our mission is the commitment to nurturing a mindful self-care space,
            curating experiences that create moments of relaxation, and fostering a deep sense of
            peace within every individual who embraces the TranquilVibes journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ transform: 'translateY(300px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className={styles.chooseUs}
        >
          <h3>Why Choose Us</h3>
          <ul>
            <li>
              <span>Nurturing a mindful self-care space</span>
            </li>
            <li>
              <span>Creating moments of relaxation</span>
            </li>
            <li>
              <span>Fostering a sense of peace within</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
