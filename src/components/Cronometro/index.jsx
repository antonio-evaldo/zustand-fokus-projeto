import styles from "./styles.module.css";

import play_arrowImg from "/src/assets/imgs/play_arrow.png";

import BotaoModo from "./BotaoModo";
import { MODO_CRONOMETRO } from "../../consts";

export default function Cronometro({ modoCronometro, setModoCronometro }) {
  const botoesModos = [
    { modo: MODO_CRONOMETRO.FOCO, texto: "Foco" },
    { modo: MODO_CRONOMETRO.DESCANSO_CURTO, texto: "Descanso curto" },
    { modo: MODO_CRONOMETRO.DESCANSO_LONGO, texto: "Descanso longo" },
  ];

  return (
    <div className={styles["cronometer"]}>
      <ul className={styles["cronometer-modes"]}>
        {botoesModos.map((botao) => (
          <li key={botao.modo}>
            <BotaoModo
              modoBotao={botao.modo}
              modoCronometro={modoCronometro}
              setModoCronometro={setModoCronometro}
            >
              {botao.texto}
            </BotaoModo>
          </li>
        ))}
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
