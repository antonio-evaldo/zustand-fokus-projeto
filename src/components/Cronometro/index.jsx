import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";

export default function Cronometro() {
  return (
    <section className={styles["cronometro"]}>
      <div className={styles["cronometro__card"]}>
        <ul className={styles["cronometro__card-list"]}>
          <li className={styles["cronometro__card-list-item"]}>
            <button
              data-contexto="foco"
              className={`
                ${styles["cronometro__card-button"]}
                ${styles["cronometro__card-button--foco"]}
                ${styles["cronometro__card-button--active"]}
              `}
            >
              Foco
            </button>
          </li>

          <li className={styles["cronometro__card-list-item"]}>
            <button
              data-contexto="short"
              className={`
                ${styles["cronometro__card-button"]}
                ${styles["cronometro__card-button--curto"]}
              `}
            >
              Descanso curto
            </button>
          </li>

          <li className={styles["cronometro__card-list-item"]}>
            <button
              data-contexto="long"
              className={`
                ${styles["cronometro__card-button"]}
                ${styles["cronometro__card-button--longo"]}
              `}
            >
              Descanso longo
            </button>
          </li>
        </ul>

        <div id="timer" className={styles["cronometro__card-timer"]}></div>

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

        <div className={styles["cronometro__card-primary-button-wrapper"]}>
          <button
            id="start-pause"
            className={styles["cronometro__card-primary-button"]}
          >
            <img
              className={styles["cronometro__card-primary-butto-icon"]}
              src={play_arrowImg}
              alt=""
            />
            <span>Começar</span>
          </button>
        </div>
      </div>
    </section>
  );
}
