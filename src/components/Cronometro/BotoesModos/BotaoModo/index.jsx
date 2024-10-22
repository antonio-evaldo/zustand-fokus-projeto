import styles from "./styles.module.css";

export default function BotaoModo({ children, modoBotao }) {
  const ativo = modoBotao.id === "foco";

  return (
    <button
      className={`
        ${styles["cronometer-modes__button"]}
        ${ativo ? styles["cronometer-modes__button--active"] : ""}
      `}
    >
      {children}
    </button>
  );
}
