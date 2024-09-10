import styles from "./App.module.css";
import { useState } from "react";
import { MODO_CRONOMETRO } from "./consts";

import Cabecalho from "./components/Cabecalho";
import Cronometro from "./components/Cronometro";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Rodape from "./components/Rodape";

function App() {
  const [modoCronometro, setModoCronometro] = useState(MODO_CRONOMETRO.FOCO);

  return (
    <div className={styles[`app--${modoCronometro}`]}>
      <Cabecalho />

      <main>
        <Cronometro modoCronometro={modoCronometro} setModoCronometro={setModoCronometro} />

        <ListaDeTarefas />
      </main>

      <Rodape />
    </div>
  );
}

export default App;
