import { useState } from "react";
import styles from "./App.module.css";

import Cabecalho from "./components/Cabecalho";
import Cronometro from "./components/Cronometro";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Rodape from "./components/Rodape";
import { MODO_CRONOMETRO } from "./consts";

function App() {
  const [modoCronometro] = useState(MODO_CRONOMETRO.FOCO);

  return (
    <div className={styles[`app--${modoCronometro.id}`]}>
      <Cabecalho />

      <main>
        <Cronometro />

        <ListaDeTarefas />
      </main>

      <Rodape />
    </div>
  );
}

export default App;
