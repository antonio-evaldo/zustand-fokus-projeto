import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import pauseImg from "/src/assets/imgs/pause.png";

import { useCronometroStore } from "../../store";

import BotoesModos from "./BotoesModos";
import Timer from "./Timer";

export default function Cronometro() {
  const decrementarTempo = useCronometroStore((estado) => estado.decrementarTempo);
  const intervaloId = useCronometroStore((estado) => estado.intervaloId);
  const setIntervaloId = useCronometroStore((estado) => estado.setIntervaloId);
  const redefinirTempo = useCronometroStore((estado) => estado.redefinirTempo);

  const textoIniciarOuPausar = intervaloId ? "Pausar" : "Começar";
  const iconeIniciarOuPausar = intervaloId ? pauseImg : play_arrowImg;

  function iniciarOuPausar() {
    if (!intervaloId) {
      iniciarCronometro();
    } else {
      pausarCronometro();
    }
  }

  function iniciarCronometro() {
    const novoId = setInterval(computarContagemRegressiva, 1000);
    setIntervaloId(novoId);
  }

  function computarContagemRegressiva() {
    const tempoAtual = useCronometroStore.getState().tempoEmSegundos;

    if (tempoAtual > 0) {
      decrementarTempo();
    } else {
      pausarCronometro();
      alert("Tempo finalizado!");
      redefinirTempo();
    }
  }

  function pausarCronometro() {
    // como pausarCronometro() é chamado pelo setInterval(), é necessário usar .getState() para obter o valor atualizado do estado. Usar intervaloId diretamente não funcionaria.
    const intervaloId = useCronometroStore.getState().intervaloId;
    clearInterval(intervaloId);
    setIntervaloId(null);
  }

  return (
    <div className={styles["cronometer"]}>
      <BotoesModos />

      <Timer />

      <label className={styles["toggle"]}>
        <input className={styles["toggle__checkbox"]} type="checkbox" id="alternar-musica" />

        <div className={styles["toggle__switch"]}></div>

        <span className={styles["toggle__span"]} htmlFor="alternar-musica">
          Música
        </span>
      </label>

      <div className={styles["cronometer__primary-button-wrapper"]}>
        <button onClick={iniciarOuPausar} className={styles["cronometer__primary-button"]}>
          <img
            className={styles["cronometer__primary-button-icon"]}
            src={iconeIniciarOuPausar}
            alt=""
          />
          <span>{textoIniciarOuPausar}</span>
        </button>
      </div>
    </div>
  );
}
