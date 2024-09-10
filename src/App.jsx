import styles from "./App.module.css";
import { useState } from "react";
import { ESTADO_CRONOMETRO } from "./consts";

import Cabecalho from "./components/Cabecalho";
import Cronometro from "./components/Cronometro";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Rodape from "./components/Rodape";

function App() {
  const [estadoCronometro] = useState(ESTADO_CRONOMETRO.FOCO);

  return (
    <div className={styles[`app--${estadoCronometro}`]}>
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
