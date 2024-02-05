import { GiAbstract002, GiAbstract037, GiAbstract086 } from 'react-icons/gi';
import styles from './supportContent.module.css';
import { motion } from 'framer-motion';

export default function SupportedContent() {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0, transformOrigin: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={styles.support}
    >
      <div className={styles.gratitude}>
        <h2>TranquilVibes Gratitude</h2>
        <p>
          We extend our heartfelt thanks to the following companies that contribute to the serenity
          and well-being of our community
        </p>
      </div>
      <div className={styles.supporters}>
        <div className={styles.supporter}>
          <h4>
            <GiAbstract002 /> <span>MindfulLife Co.</span>
          </h4>
          <p>
            A leader in mindful living, MindfulLife Co. shares our commitment to fostering
            tranquility in everyday life.
          </p>
        </div>
        <div className={styles.supporter}>
          <h4>
            <GiAbstract037 /> <span>SerenityTech Solutions</span>
          </h4>
          <p>
            SerenityTech Solutions provides cutting-edge technology that enhances our virtual
            wellness retreat experiences.
          </p>
        </div>
        <div className={styles.supporter}>
          <h4>
            <GiAbstract086 />
            <span>ZenHarbor Retreats</span>
          </h4>
          <p>
            ZenHarbor Retreats, a premier wellness retreat organizer, collaborates with us to bring
            you transformative experiences.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
