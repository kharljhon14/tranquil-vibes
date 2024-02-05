import Button from '../../components/button/Button';
import styles from './heroContent.module.css';
import { motion } from 'framer-motion';
export default function HeroContent() {
  return (
    <div className={styles.hero}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1>Embark on a Serene Journey with TranquilVibes</h1>
        <p>Nurture Your Well-being and Discover Inner Harmony</p>

        <Button>Begin Your Serenity</Button>
      </motion.div>
    </div>
  );
}
