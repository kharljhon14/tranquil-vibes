import { FaHeart } from 'react-icons/fa';
import styles from './wellnessContent.module.css';

import { motion } from 'framer-motion';

export default function WellnessContent() {
  return (
    <div className={styles.wellness}>
      <div className={styles.container}>
        <div className={styles.wellnessContent}>
          <div>
            <h2>Wellness Retreats</h2>
            <p>
              Explore our curated wellness retreats, each designed to provide a transformative
              experience for mind, body, and spirit. From mindfulness weekends to virtual escapes,
              our retreats offer a sanctuary for renewal.
            </p>
          </div>

          <div className={styles.join}>
            <h4>Join a Retreat</h4>
            <p>
              Reserve your spot for an upcoming retreat and embrace a journey of self-discovery and
              rejuvenation.
            </p>
          </div>
        </div>
        <div className={styles.upcoming}>
          <h3>Upcoming Retreats</h3>
          <ol>
            <li>Serenity in Nature: A Guided Retreat</li>
            <li>Mindful Rejuvenation Weekend</li>
            <li>Digital Detox: Unplug and Reconnect</li>
            <li>Zen Garden Meditation Retreat</li>
            <li>Holistic Healing Retreat: Body, Mind, and Soul</li>
            <li>Sacred Space Yoga Retreat</li>
            <li>Forest Bathing Experience: Reconnect with Nature</li>
          </ol>
        </div>
      </div>

      <motion.div
        animate={{
          rotate: [0, 5, 0, 5, 0],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        className={styles.heart1}
      >
        <FaHeart />
      </motion.div>
      <motion.div
        animate={{
          rotate: [9, 0, 9, 0, 9],
        }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        className={styles.heart2}
      >
        <FaHeart />
      </motion.div>
      <motion.div
        animate={{
          rotate: [11, 0, 11, 0, 11],
        }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        className={styles.heart3}
      >
        <FaHeart />
      </motion.div>
    </div>
  );
}
