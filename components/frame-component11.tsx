import type { NextPage } from "next";
import styles from "./frame-component11.module.css";

const FrameComponent11: NextPage = () => {
  return (
    <div className={styles.cursosParent}>
      <h2 className={styles.cursos}>Cursos</h2>
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-1@2x.png"
          />
          <div className={styles.networkingParent}>
            <div className={styles.networking}>{`Networking `}</div>
            <div className={styles.desenvolvimento}>Desenvolvimento</div>
          </div>
          <h2 className={styles.gastronomia}>Gastronomia</h2>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.groupGroup}>
            <img
              className={styles.groupIcon1}
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
            <div className={styles.frameWrapper}>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
            </div>
          </div>
          <div className={styles.gestoDeProjetosParent}>
            <div className={styles.gestoDeProjetos}>Gestão de Projetos</div>
            <div className={styles.negcios}>Negócios</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
