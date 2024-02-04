import styles from './howItWorksContent.module.css';

export default function HowItWorksContent() {
  return (
    <div className={styles.how}>
      <div className={styles.content}>
        <h2>How It Works</h2>
        <div className={styles.step}>
          <h3>Step 1: Embrace TranquilVibes</h3>
          <p>
            Welcome peace into your life by joining TranquilVibes, your haven for serene self-care.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Step 2: Explore Serenity Spaces</h3>
          <p>
            Discover our soothing guided meditations, immersive wellness retreats, and connect with
            our calm community.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Step 3: Cultivate Inner Peace</h3>
          <p>
            Immerse yourself in tranquility and let the gentle waves of self-care bring you to a
            state of blissful calm. .
          </p>
        </div>
      </div>
      <img
        src="/steps.png"
        alt="Girl taking care of platns"
      />
    </div>
  );
}
