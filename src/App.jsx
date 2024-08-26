import "./App.css";
import { useState } from "react";
import { ESTADO_CRONOMETRO } from "./consts";

import logoImg from "./assets/imgs/logo.png";
import focoImg from "./assets/imgs/foco.png";
import play_arrowImg from "./assets/imgs/play_arrow.png";
import moreImg from "./assets/imgs/more.svg";
import checkImg from "./assets/imgs/check.svg";
import trashImg from "./assets/imgs/trash.svg";
import deleteImg from "./assets/imgs/delete.png";
import closeImg from "./assets/imgs/close.png";
import saveImg from "./assets/imgs/save.png";
import add_circleImg from "./assets/imgs/add_circle.png";

function App() {
  const [estadoCronometro, setEstadoCronometro] = useState(
    ESTADO_CRONOMETRO.FOCO
  );

  return (
    <main className={`app app--${estadoCronometro}`}>
      <header className="app__header">
        <figure className="app__logo-figure">
          <img
            className="app__logo-image"
            src={logoImg}
            alt="Logotipo do Fokus"
          />
        </figure>
      </header>

      <section className="app__section-banner-container">
        <h1 className="app__title">
          Otimize sua produtividade,
          <br />
          <strong className="app__title-strong">
            mergulhe no que importa.
          </strong>
        </h1>
        <figure className="app__image-figure">
          <img className="app__image" src={focoImg} alt="" />
        </figure>
      </section>

      <section className="app__section-card-container">
        <div className="app__card">
          <ul className="app__card-list">
            <li className="app__card-list-item">
              <button
                data-contexto="foco"
                className="app__card-button app__card-button--foco active"
              >
                Foco
              </button>
            </li>

            <li className="app__card-list-item">
              <button
                data-contexto="short"
                className="app__card-button app__card-button--curto"
              >
                Descanso curto
              </button>
            </li>

            <li className="app__card-list-item">
              <button
                data-contexto="long"
                className="app__card-button app__card-button--longo"
              >
                Descanso longo
              </button>
            </li>
          </ul>

          <div id="timer" className="app__card-timer"></div>

          <ul className="app__card-list">
            <li className="app__card-list-item">
              <label className="toggle">
                <input
                  className="toggle-checkbox"
                  type="checkbox"
                  id="alternar-musica"
                />
                <div className="toggle-switch"></div>
              </label>
            </li>

            <li className="app__card-list-item">
              <label className="app__card-list-label" htmlFor="alternar-musica">
                Música
              </label>
            </li>
          </ul>

          <div className="app__card-primary-button-wrapper">
            <button id="start-pause" className="app__card-primary-button">
              <img
                className="app__card-primary-butto-icon"
                src={play_arrowImg}
                alt=""
              />
              <span>Começar</span>
            </button>
          </div>
        </div>
      </section>

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

      <footer className="app__footer">
        <p className="app__footer-text">
          Projeto fictício e sem fins comerciais. Imagens geradas por IA no
          Adobe Firefly.Desenvolvido por Alura.
        </p>
      </footer>
    </main>
  );
}

export default App;
