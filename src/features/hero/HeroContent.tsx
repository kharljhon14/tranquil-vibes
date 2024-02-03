import Button from '../../components/button/Button';
import styles from './heroContent.module.css';

export default function HeroContent() {
  return (
    <div className={styles.hero}>
      <h1>Embark on a Serene Journey with TranquilVibes</h1>
      <p>Nurture Your Well-being and Discover Inner Harmony</p>

      <Button>Begin Your Serenity</Button>
    </div>
  );
}
