import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {}

export default function Button({ children, ...props }: Props) {
  return (
    <button
      className={styles.buttonPrimary}
      {...props}
    >
      {children}
    </button>
  );
}
