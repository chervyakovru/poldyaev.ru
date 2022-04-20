import styles from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <div id="portfolio" className={styles.content}>
      <div className={styles.top_circle}>
        <div className={styles.row}>
          <div className={styles.card}>
            <div className={styles.img}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}></div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_circle}>
        <div className={styles.row}>
          <div className={styles.card}>
            <div className={styles.img}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
