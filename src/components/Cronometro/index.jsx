import styles from "./styles.module.css";
import audioPlaySom from "/src/assets/sons/play.wav";
import audioPauseSom from "/src/assets/sons/pause.mp3";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import pauseImg from "/src/assets/imgs/pause.png";

import { useCronometroStore } from "../../store";

import BotoesModos from "./BotoesModos";
import Timer from "./Timer";
import SwitchMusica from "./SwitchMusica";

export default function Cronometro() {
  const intervaloId = useCronometroStore((estado) => estado.intervaloId);
  const iniciarCronometro = useCronometroStore((estado) => estado.iniciarCronometro);
  const pausarCronometro = useCronometroStore((estado) => estado.pausarCronometro);

  const textoIniciarOuPausar = intervaloId ? "Pausar" : "Começar";
  const iconeIniciarOuPausar = intervaloId ? pauseImg : play_arrowImg;

  const audioPlay = new Audio(audioPlaySom);
  const audioPause = new Audio(audioPauseSom);

  function iniciarOuPausar() {
    if (!intervaloId) {
      audioPlay.play();
      iniciarCronometro();
    } else {
      audioPause.play();
      pausarCronometro();
    }
  }

  return (
    <div className={styles["cronometer"]}>
      <BotoesModos />

      <Timer />

      <SwitchMusica />

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
