import { useState } from "react";
import styles from "./styles.module.css";

export default function BotaoModo({ children, modoBotao, modoCronometro, setModoCronometro }) {
  const [ativo, setAtivo] = useState(modoCronometro === modoBotao);

  function aoClicar() {
    setModoCronometro(modoBotao);
    // setAtivo(modoCronometro === modoBotao);
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
