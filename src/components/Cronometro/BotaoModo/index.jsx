import styles from "./styles.module.css";

export default function BotaoModo({ children, modoBotao, modoCronometro, setModoCronometro }) {
  const ativo = modoBotao === modoCronometro;

  function aoClicar() {
    setModoCronometro(modoBotao);
  }

  return (
    <button
      className={`
        ${styles["cronometer-modes__button"]}
        ${ativo ? styles["cronometer-modes__button--active"] : ""}
      `}
      onClick={aoClicar}
    >
      {children}
    </button>
  );
}
