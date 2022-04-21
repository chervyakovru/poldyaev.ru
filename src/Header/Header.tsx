import styles from "./Header.module.css";
import Slider from "../Slider/Slider";
import Circle from "./Circle/Circle";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <li className={styles.button}>
          <a href="#" className={styles.link}>
            Работы
          </a>
        </li>
        <li className={styles.button}>
          <a href="#" className={styles.link}>
            Резюме
          </a>
        </li>
        <li className={styles.button}>
          <a href="#" className={styles.link}>
            Контакты
          </a>
        </li>
        <hr className={styles.line} />
        <li className={styles.button}>
          <a href="mailto:daniil@poldyaev.ru" className={styles.link}>
            Работы
          </a>
        </li>
        <li className={styles.button}>
          <a href="tel:+79678532813" className={styles.link}>
            +7 967 853 28 13
          </a>
        </li>
      </nav>
      <Slider />
      <div className={styles.button_wrapper}>
        <Circle />
      </div>
      <div className={styles.aboutMe__wrapper}>
        <p className={styles.aboutMe_title}>
          Меня зовут Данил Польдяев,
          <br />я – начинающий frontend разработчик
        </p>
        <p className={(styles.aboutMe_title, styles.aboutMeLast)}>
          Люблю решать сложные задачи и узнавать <br /> новое. Учусь создавать
          web приложения <br /> с помощью React и экосистемы
        </p>
        <div className={styles.linkWrapper}>
          <a className={styles.linkDown} href="#portfolio">
            дальше
          </a>
        </div>
      </div>
    </header>
  );
}
