import container from "../Container/Container.module.css";
import styles from "./Main.module.css";
import Portfolio from "./Portfolio/Portfolio";

export default function Header() {
  return (
    <main className={styles.mainStyles}>
      <div className={container.container}>
        <div className={styles.column}>
          <div className={styles.row}>
            <p>
              <a
                href="https://github.com/Poldyaich97/airbnb"
                className={styles.link}
              >
                airbnb
              </a>
            </p>
            <p className={styles.project}>React</p>
          </div>
          <div className={styles.row}>
            <p>
              <a
                href="https://github.com/Poldyaich97/StarWars"
                className={styles.link}
              >
                starwars
              </a>
            </p>
            <p className={styles.project}>JS Canvas</p>
          </div>
          <div className={styles.row}>
            <p>
              <a
                href="https://github.com/Poldyaich97/poldyaev.ru"
                className={styles.link}
              >
                portfolio
              </a>
            </p>
            <p className={styles.project}>Html/CSS/Js</p>
          </div>
        </div>
        <Portfolio />
      </div>
    </main>
  );
}
