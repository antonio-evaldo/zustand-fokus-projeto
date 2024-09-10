import styles from "./styles.module.css";
import moreImg from "/src/assets/imgs/more.svg";
import checkImg from "/src/assets/imgs/check.svg";
import trashImg from "/src/assets/imgs/trash.svg";
import deleteImg from "/src/assets/imgs/delete.png";
import closeImg from "/src/assets/imgs/close.png";
import saveImg from "/src/assets/imgs/save.png";
import add_circleImg from "/src/assets/imgs/add_circle.png";

export default function ListaDeTarefas() {
  return (
    <section className={styles["app__section-task-container"]}>
      <div className={styles["app__section-task-content"]}>
        <header className={styles["app__section-active-task"]}>
          <p className={styles["app__section-active-task-label"]}>
            #Em andamento:
          </p>
          <p className={styles["app__section-active-task-description"]}></p>
        </header>

        <div className={styles["app__section-task-header"]}>
          <h2 className={styles["app__section-tasks-heading"]}>
            Lista de tarefas:
          </h2>

          <div className={styles["dropdown-container"]}>
            <button className={styles["app_button-more"]}>
              <img src={moreImg} alt="Opções da lista de tarefas" />
            </button>

            <ul className={styles["app__section-task-header__ul"]}>
              <li className={styles["app__section-task-header__li"]}>
                <button
                  className={styles["app__section-task-header__li__button"]}
                  id="btn-remover-concluidas"
                >
                  <img src={checkImg} alt="" />
                  Limpar tarefas concluídas
                </button>
              </li>

              <li className={styles["app__section-task-header__li"]}>
                <button
                  className={styles["app__section-task-header__li__button"]}
                  id="btn-remover-todas"
                >
                  <img src={trashImg} alt="" />
                  Limpar todas as tarefas
                </button>
              </li>
            </ul>
          </div>
        </div>

        <ul className={styles["app__section-task-list"]}></ul>

        <form
          className={`
            ${styles["app__form-add-task"]}
            ${styles["hidden"]}
          `}
          aria-hidden="true"
        >
          <div className={styles["app__form-field"]}>
            <label className={styles["app__form-label"]}>
              Adicionando tarefa
            </label>
            <textarea
              required
              rows="4"
              className={styles["app__form-textarea"]}
              placeholder="No que você está trabalhando?"
            ></textarea>
          </div>

          <footer className={styles["app__form-footer"]}>
            <button
              type="button"
              className={`
                ${styles["app__form-footer__button"]}
                ${styles["app__form-footer__button--delete"]}
              `}
            >
              <img src={deleteImg} alt="" /> Deletar
            </button>
            <div className={styles["splitter"]}></div>
            <button
              type="button"
              className={`
                ${styles["app__form-footer__button"]}
                ${styles["app__form-footer__button--cancel"]}
              `}
            >
              <img src={closeImg} alt="" /> Cancelar
            </button>
            <button
              className={`
                ${styles["app__form-footer__button"]}
                ${styles["app__form-footer__button--confirm"]}
              `}
            >
              <img src={saveImg} alt="" /> Salvar
            </button>
          </footer>
        </form>

        <button className={styles["app__button--add-task"]}>
          <img src={add_circleImg} alt="" /> Adicionar nova tarefa
        </button>
      </div>
    </section>
  );
}
