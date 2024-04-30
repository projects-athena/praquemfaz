import type { NextPage } from "next";
import styles from "./frame-component9.module.css";

const FrameComponent9: NextPage = () => {
  return (
    <div className={styles.mdulosDoCursoParent}>
      <h2 className={styles.mdulosDoCurso}>Módulos do Curso</h2>
      <div className={styles.frameParent}>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame-11.svg"
        />
        <img
          className={styles.frameIcon1}
          loading="lazy"
          alt=""
          src="/frame-11.svg"
        />
        <div className={styles.functionsLabelParent}>
          <div className={styles.functionsLabel}>
            <div className={styles.moduleNestingParent}>
              <div className={styles.moduleNesting}>
                <div className={styles.moduleNesting1}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-42@2x.png"
                  />
                </div>
                <div className={styles.mdulo1IntroduoParent}>
                  <div className={styles.mdulo1Introduo}>
                    Módulo 1: Introdução
                  </div>
                  <div className={styles.mdulo2Variveis}>
                    Módulo 2: Variáveis
                  </div>
                </div>
              </div>
              <div className={styles.moduleNesting2}>
                <div className={styles.groupWrapper}>
                  <img
                    className={styles.groupIcon1}
                    loading="lazy"
                    alt=""
                    src="/group-52@2x.png"
                  />
                </div>
                <div className={styles.mdulo3FunesParent}>
                  <div className={styles.mdulo3Funes}>Módulo 3: Funções</div>
                  <div className={styles.mdulo4Bibliotecas}>
                    Módulo 4: Bibliotecas
                  </div>
                </div>
              </div>
              <h2 className={styles.instrutores}>Instrutores</h2>
            </div>
            <div className={styles.frameWrapper}>
              <img
                className={styles.frameIcon2}
                loading="lazy"
                alt=""
                src="/frame-11.svg"
              />
            </div>
          </div>
          <div className={styles.groupParent}>
            <img
              className={styles.groupIcon2}
              loading="lazy"
              alt=""
              src="/group-62@2x.png"
            />
            <div className={styles.maskGroupWrapper}>
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group-22.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
