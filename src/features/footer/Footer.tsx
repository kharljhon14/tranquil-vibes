import styles from './footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className="text-sm">&copy; 2024 Tranquil Vibes. All rights reserved.</p>
      </div>
    </footer>
  );
}
