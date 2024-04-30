import type { NextPage } from "next";
import styles from "./joao-silva-label.module.css";

const JoaoSilvaLabel: NextPage = () => {
  return (
    <section className={styles.joaoSilvaLabel}>
      <h2 className={styles.recomendados}>Recomendados</h2>
      <div className={styles.durationTime}>
        <div className={styles.durationTimeInner}>
          <div className={styles.logoContainerParent}>
            <div className={styles.logoContainer}>
              <div className={styles.searchField}>
                <div className={styles.tEXTParent}>
                  <div className={styles.tEXT}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-21.svg"
                    />
                    <img
                      className={styles.groupIcon1}
                      loading="lazy"
                      alt=""
                      src="/group-31@2x.png"
                    />
                    <div className={styles.jooSilvaWrapper}>
                      <h3 className={styles.jooSilva}>João Silva</h3>
                    </div>
                  </div>
                  <div className={styles.groupParent}>
                    <img
                      className={styles.groupIcon2}
                      alt=""
                      src="/group-41@2x.png"
                    />
                    <img
                      className={styles.groupIcon3}
                      loading="lazy"
                      alt=""
                      src="/group-51.svg"
                    />
                  </div>
                </div>
                <div className={styles.searchFieldInner}>
                  <div className={styles.fundamentosDePythonParent}>
                    <h3 className={styles.fundamentosDePython}>
                      Fundamentos de Python
                    </h3>
                    <div className={styles.frameParent}>
                      <div className={styles.frameWrapper}>
                        <img
                          className={styles.frameIcon}
                          loading="lazy"
                          alt=""
                          src="/frame1.svg"
                        />
                      </div>
                      <div className={styles.horasWrapper}>
                        <div className={styles.horas}>2 horas</div>
                      </div>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameIcon1}
                          loading="lazy"
                          alt=""
                          src="/frame-11.svg"
                        />
                      </div>
                      <div className={styles.maskGroupWrapper}>
                        <img
                          className={styles.maskGroupIcon}
                          loading="lazy"
                          alt=""
                          src="/mask-group1.svg"
                        />
                      </div>
                      <img
                        className={styles.groupIcon4}
                        loading="lazy"
                        alt=""
                        src="/group-61@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.groupGroup}>
                <img className={styles.groupIcon5} alt="" src="/group-71.svg" />
                <img
                  className={styles.groupIcon6}
                  alt=""
                  src="/group-81@2x.png"
                />
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon7}
                    alt=""
                    src="/group-91.svg"
                  />
                  <img
                    className={styles.groupIcon8}
                    loading="lazy"
                    alt=""
                    src="/group-101@2x.png"
                  />
                  <img
                    className={styles.maskGroupIcon1}
                    loading="lazy"
                    alt=""
                    src="/mask-group-11.svg"
                  />
                </div>
                <img
                  className={styles.maskGroupIcon2}
                  loading="lazy"
                  alt=""
                  src="/mask-group-21.svg"
                />
                <img
                  className={styles.frameIcon2}
                  loading="lazy"
                  alt=""
                  src="/frame1.svg"
                />
              </div>
              <div className={styles.hour}>1 hour</div>
            </div>
          </div>
        </div>
        <h2 className={styles.categorias}>Categorias</h2>
      </div>
    </section>
  );
};

export default JoaoSilvaLabel;
