import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";

export default function Cronometro() {
  return (
    <div className={styles["cronometer"]}>
      <ul className={styles["cronometer-modes"]}>
        <li>
          <button
            data-contexto="foco"
            className={`
              ${styles["cronometer-modes__button"]}
              ${styles["cronometer-modes__button--foco"]}
              ${styles["cronometer-modes__button--active"]}
            `}
          >
            Foco
          </button>
        </li>

        <li>
          <button
            data-contexto="short"
            className={`
              ${styles["cronometer-modes__button"]}
              ${styles["cronometer-modes__button--curto"]}
            `}
          >
            Descanso curto
          </button>
        </li>

        <li>
          <button
            data-contexto="long"
            className={`
              ${styles["cronometer-modes__button"]}
              ${styles["cronometer-modes__button--longo"]}
            `}
          >
            Descanso longo
          </button>
        </li>
      </ul>

      <div id="timer" className={styles["cronometer-timer"]}></div>

      <label className={styles["toggle"]}>
        <input
          className={styles["toggle__checkbox"]}
          type="checkbox"
          id="alternar-musica"
        />

        <div className={styles["toggle__switch"]}></div>

        <span className={styles["toggle__span"]} htmlFor="alternar-musica">
          Música
        </span>
      </label>

      <div className={styles["cronometer__primary-button-wrapper"]}>
        <button
          id="start-pause"
          className={styles["cronometer__primary-button"]}
        >
          <img
            className={styles["cronometer__primary-button-icon"]}
            src={play_arrowImg}
            alt=""
          />
          <span>Começar</span>
        </button>
      </div>
    </div>
  );
}
