import styles from "./styles.module.css";

export default function Timer() {
  const tempoEmSegundos = 30;

  const tempo = new Date(tempoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pt-BR", {
    minute: "2-digit",
    second: "2-digit",
  });

  return <div className={styles["cronometer-timer"]}>{tempoFormatado}</div>;
}
