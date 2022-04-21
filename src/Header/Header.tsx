/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Header.module.css";
import containerStyles from "../Container/Container.module.css";
import Slider from "../Slider/Slider";
import Circle from "./Circle/Circle";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__slider}>
        <Slider />
      </div>

      <div className={containerStyles.container} style={{ height: "100%" }}>
        <div className={styles.header__content}>
          <nav className={styles.navigation}>
            <li>
              <a href="#" className={styles.link}>
                Работы
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Резюме
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Контакты
              </a>
            </li>
            <div className={styles.line} />
            <li>
              <a href="mailto:daniil@poldyaev.ru" className={styles.link}>
                daniil@poldyaev.ru
              </a>
            </li>
            <li>
              <a href="tel:+79678532813" className={styles.link}>
                +7 967 853 28 13
              </a>
            </li>
          </nav>
          <div className={styles.about}>
            <div className={styles.about__circle}>
              <Circle />
            </div>
            <p className={styles.myNameIs}>
              Меня зовут Данил Польдяев,
              <br />я – начинающий frontend разработчик
            </p>
            <p className={styles.description}>
              Люблю решать сложные задачи и узнавать <br /> новое.
              Учусь создавать web приложения <br /> с помощью React и экосистемы
            </p>
            <a className={styles.lookBelow} href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
              >
                <path
                  fill="#fff"
                  stroke="#1E1E1E"
                  strokeWidth=".55"
                  d="m11.05 14.65 6.1-6.1 1.19 1.18-8.61 8.6-8.61-8.6L2.3 8.54l6.1 6.1.48.48V1h1.7v14.12l.47-.47Z"
                />
              </svg>
              <span className={styles.lookBelow__title}>дальше</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
