import styles from "./App.module.css";
import { useState } from "react";
import { ESTADO_CRONOMETRO } from "./consts";

import moreImg from "./assets/imgs/more.svg";
import checkImg from "./assets/imgs/check.svg";
import trashImg from "./assets/imgs/trash.svg";
import deleteImg from "./assets/imgs/delete.png";
import closeImg from "./assets/imgs/close.png";
import saveImg from "./assets/imgs/save.png";
import add_circleImg from "./assets/imgs/add_circle.png";

import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Cronometro from "./components/Cronometro";

function App() {
  const [estadoCronometro] = useState(ESTADO_CRONOMETRO.FOCO);

  return (
    <div className={styles[`app--${estadoCronometro}`]}>
      <Cabecalho />

      <main>
        <Cronometro />

        <section className="app__section-task-container">
          <div className="app__section-task-content">
            <header className="app__section-active-task">
              <p className="app__section-active-task-label">#Em andamento:</p>
              <p className="app__section-active-task-description"></p>
            </header>

            <div className="app__section-task-header">
              <h2 className="app__section-tasks-heading">Lista de tarefas:</h2>

              <div className="dropdown-container">
                <button className="app_button-more">
                  <img src={moreImg} alt="Opções da lista de tarefas" />
                </button>

                <ul className="app__section-task-header__ul">
                  <li className="app__section-task-header__li">
                    <button
                      className="app__section-task-header__li__button"
                      id="btn-remover-concluidas"
                    >
                      <img src={checkImg} alt="" />
                      Limpar tarefas concluídas
                    </button>
                  </li>

                  <li className="app__section-task-header__li">
                    <button
                      className="app__section-task-header__li__button"
                      id="btn-remover-todas"
                    >
                      <img src={trashImg} alt="" />
                      Limpar todas as tarefas
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="app__section-task-list"></ul>

            <form className="app__form-add-task hidden" aria-hidden="true">
              <div className="app__form-field">
                <label className="app__form-label">Adicionando tarefa</label>
                <textarea
                  required
                  rows="4"
                  className="app__form-textarea"
                  placeholder="No que você está trabalhando?"
                ></textarea>
              </div>

              <footer className="app__form-footer">
                <button
                  type="button"
                  className="app__form-footer__button app__form-footer__button--delete"
                >
                  <img src={deleteImg} alt="" /> Deletar
                </button>
                <div className="splitter"></div>
                <button
                  type="button"
                  className="app__form-footer__button app__form-footer__button--cancel"
                >
                  <img src={closeImg} alt="" /> Cancelar
                </button>
                <button className="app__form-footer__button app__form-footer__button--confirm">
                  <img src={saveImg} alt="" /> Salvar
                </button>
              </footer>
            </form>

            <button className="app__button--add-task">
              <img src={add_circleImg} alt="" /> Adicionar nova tarefa
            </button>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

export default App;
