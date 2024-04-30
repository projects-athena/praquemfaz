import type { NextPage } from "next";
import styles from "./column-grid.module.css";

const ColumnGrid: NextPage = () => {
  return (
    <div className={styles.columnGrid}>
      <div className={styles.rowGrid}>
        <div className={styles.groupParent}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-16@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.buttonParent}>
              <div className={styles.button}>
                <div className={styles.inputField}>
                  <img
                    className={styles.maskGroupIcon}
                    loading="lazy"
                    alt=""
                    src="/mask-group-5.svg"
                  />
                  <div className={styles.icon}>
                    <img
                      className={styles.groupIcon1}
                      loading="lazy"
                      alt=""
                      src="/group-51.svg"
                    />
                  </div>
                </div>
                <div className={styles.josDias}>José Dias</div>
              </div>
              <div className={styles.imageParent}>
                <div className={styles.image}>
                  <img
                    className={styles.groupIcon2}
                    alt=""
                    src="/group-18.svg"
                  />
                  <img
                    className={styles.groupIcon3}
                    loading="lazy"
                    alt=""
                    src="/group-19.svg"
                  />
                </div>
                <div className={styles.progresso69}>Progresso: 69%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vejaTodosOsCursosWrapper}>
          <h3 className={styles.vejaTodosOs}>Veja todos os cursos</h3>
        </div>
      </div>
    </div>
  );
};

export default ColumnGrid;
