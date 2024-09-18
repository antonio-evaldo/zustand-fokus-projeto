import styles from "./styles.module.css";

import { useCronometroStore } from "../../../store";

export default function BotaoModo({ children, modoBotao }) {
  const modoCronometro = useCronometroStore((estado) => estado.modoCronometro);
  const defineModoCronometro = useCronometroStore((estado) => estado.defineModoCronometro);

  const ativo = modoBotao === modoCronometro;

  function aoClicar() {
    defineModoCronometro(modoBotao);
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
