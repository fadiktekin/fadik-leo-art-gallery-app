import styles from "./button.module.css";
export default function Button({ children, onClick, className }) {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
