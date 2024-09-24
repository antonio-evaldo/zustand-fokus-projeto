import styles from "./styles.module.css";

import play_arrowImg from "/src/assets/imgs/play_arrow.png";

import BotaoModo from "./BotaoModo";
import { MODO_CRONOMETRO, useCronometroStore } from "../../store";

export default function Cronometro() {
  const modos = [
    MODO_CRONOMETRO.FOCO,
    MODO_CRONOMETRO.DESCANSO_CURTO,
    MODO_CRONOMETRO.DESCANSO_LONGO,
  ];

  const tempoEmSegundos = useCronometroStore((estado) => estado.tempoEmSegundos);

  const tempo = new Date(tempoEmSegundos * 1000);

  const tempoFormatado = tempo.toLocaleTimeString("pt-BR", {
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className={styles["cronometer"]}>
      <ul className={styles["cronometer-modes"]}>
        {modos.map((modo) => (
          <li key={modo.id}>
            <BotaoModo modoBotao={modo}>{modo.nome}</BotaoModo>
          </li>
        ))}
      </ul>

      <div id="timer" className={styles["cronometer-timer"]}>
        {tempoFormatado}
      </div>

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
