import styles from './howItWorksContent.module.css';
import { motion } from 'framer-motion';

export default function HowItWorksContent() {
  return (
    <div className={styles.how}>
      <div className={styles.content}>
        <motion.h2
          initial={{ transform: 'translateY(300px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <motion.div
          initial={{ transform: 'translateY(300px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className={styles.step}
        >
          <h3>Step 1: Embrace TranquilVibes</h3>
          <p>
            Welcome peace into your life by joining TranquilVibes, your haven for serene self-care.
          </p>
        </motion.div>

        <motion.div
          initial={{ transform: 'translateY(300px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className={styles.step}
        >
          <h3>Step 2: Explore Serenity Spaces</h3>
          <p>
            Discover our soothing guided meditations, immersive wellness retreats, and connect with
            our calm community.
          </p>
        </motion.div>

        <motion.div
          initial={{ transform: 'translateY(300px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className={styles.step}
        >
          <h3>Step 3: Cultivate Inner Peace</h3>
          <p>
            Immerse yourself in tranquility and let the gentle waves of self-care bring you to a
            state of blissful calm. .
          </p>
        </motion.div>
      </div>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="/steps.png"
        alt="Girl taking care of platns"
      />
    </div>
  );
}
