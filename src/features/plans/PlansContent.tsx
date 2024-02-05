import { PiAsterisk } from 'react-icons/pi';
import PlanCard, { Plan } from './PlanCard';
import styles from './plansContent.module.css';
import { motion } from 'framer-motion';

const PLANS: Array<Plan> = [
  {
    image: '/starter.png',
    title: 'Tranquil Starter',
    listItems: ['Free access to selected serene spaces', 'Mindful Meditation Oasis'],
  },
  {
    image: '/seeker.png',
    title: 'Serenity Seeker',
    listItems: ['$9.99/month', 'Full access to all serene spacess', 'Wholesome Wellness Retreats'],
  },
  {
    image: '/bliss.png',
    title: 'Blissful Explorer',
    listItems: ['$19.99/month', 'All features included', 'Priority access to calming events'],
  },
];

export default function PlansContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true }}
      className={styles.plansContainer}
    >
      <motion.div
        animate={{
          scale: [1, 1, 1.4, 1.4, 1],
          rotate: 360,
        }}
        transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        className={styles.asterisk}
      >
        <PiAsterisk />
      </motion.div>
      <div className={styles.plans}>
        <h2>Choose the Plan That Aligns with Your Serenity Goals</h2>
        <div className={styles.planCards}>
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.title}
              plan={plan}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
