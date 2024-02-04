import styles from './planCard.module.css';
import { motion } from 'framer-motion';

export interface Plan {
  title: string;
  image: string;
  listItems: string[];
}

interface Props {
  plan: Plan;
}

export default function PlanCard({ plan }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={styles.card}
    >
      <div className={styles.imgContainer}>
        <img
          src={plan.image}
          alt="Plan flower"
        />
      </div>
      <h4>{plan.title}</h4>
      <ul>
        {plan.listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
