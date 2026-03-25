import styles from "./SectionLabel.module.css";

export default function SectionLabel({ children }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.line} />
      <span className={styles.text}>{children}</span>
      <span className={styles.line} />
    </div>
  );
}