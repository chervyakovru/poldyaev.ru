import styles from "./Footer.module.css";
import Slider from "../Slider/Slider";
import container from "../Container/Container.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>
        давайте делать крутые <br />
        продукты вместе
      </h2>

      <div className={styles.contacts}>
        <a
          href="daniil@poldyaev.ru&body=Привет, хочу предложить тебе работу."
          className={styles.button}
        >
          daniil@poldyaev.ru
        </a>
        <a href="tel:+79678532813" className={styles.button}>
          +7 967 853 28 13
        </a>
      </div>
      <div className={styles.slider}>
        <Slider />
      </div>
      <div className={container.container}>
        <div className={styles.line}></div>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <div className={styles.block}>
              <p className={styles.blockTitle}>версия</p>
              <p className={styles.blockSubTitle}>2022 </p>
            </div>
            <div className={styles.block}>
              <p className={styles.blockTitle}>местное время</p>
              <p className={styles.blockSubTitle}>10:24 GMT +2 </p>
            </div>
          </div>
          <div className={styles.block}>
            <p className={styles.blockTitle}>контакты</p>
            <div className={styles.social}>
              <p className={[styles.blockSubTitle, styles.telegram].join(" ")}>
                <a href="#">telegram</a>{" "}
              </p>
              <p className={[styles.blockSubTitle, styles.github].join(" ")}>
                <a href="#">github</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
