import styles from './planCard.module.css';

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
    <div className={styles.card}>
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
    </div>
  );
}
