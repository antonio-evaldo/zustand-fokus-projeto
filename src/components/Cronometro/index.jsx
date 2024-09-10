import styles from "./styles.module.css";

import play_arrowImg from "/src/assets/imgs/play_arrow.png";

import BotaoModo from "./BotaoModo";
import { MODO_CRONOMETRO } from "../../consts";

export default function Cronometro({ modoCronometro, setModoCronometro }) {
  return (
    <div className={styles["cronometer"]}>
      <ul className={styles["cronometer-modes"]}>
        <li>
          <BotaoModo
            modoBotao={MODO_CRONOMETRO.FOCO}
            modoCronometro={modoCronometro}
            setModoCronometro={setModoCronometro}
          >
            Foco
          </BotaoModo>
        </li>

        <li>
          <BotaoModo
            modoBotao={MODO_CRONOMETRO.DESCANSO_CURTO}
            modoCronometro={modoCronometro}
            setModoCronometro={setModoCronometro}
          >
            Descanso curto
          </BotaoModo>
        </li>

        <li>
          <BotaoModo
            modoBotao={MODO_CRONOMETRO.DESCANSO_LONGO}
            modoCronometro={modoCronometro}
            setModoCronometro={setModoCronometro}
          >
            Descanso longo
          </BotaoModo>
        </li>
      </ul>

      <div id="timer" className={styles["cronometer-timer"]}></div>

      <label className={styles["toggle"]}>
        <input className={styles["toggle__checkbox"]} type="checkbox" id="alternar-musica" />

        <div className={styles["toggle__switch"]}></div>

        <span className={styles["toggle__span"]} htmlFor="alternar-musica">
          Música
        </span>
      </label>

      <div className={styles["cronometer__primary-button-wrapper"]}>
        <button id="start-pause" className={styles["cronometer__primary-button"]}>
          <img className={styles["cronometer__primary-button-icon"]} src={play_arrowImg} alt="" />
          <span>Começar</span>
        </button>
      </div>
    </div>
  );
}
