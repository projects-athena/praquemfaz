import type { NextPage } from "next";
import styles from "./frame.module.css";

const Frame: NextPage = () => {
  return (
    <header className={styles.frame}>
      <img className={styles.vectorIcon} alt="" src="/vector21.svg" />
      <div className={styles.entrar}>Entrar</div>
      <div className={styles.frameParent}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon1} alt="" src="/vector-11.svg" />
          <div className={styles.frame1}>
            <div className={styles.formParent}>
              <img
                className={styles.formIcon}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
              <div className={styles.nomeCompleto}>Nome completo</div>
            </div>
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
              <img
                className={styles.formIcon1}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
              <img
                className={styles.formIcon2}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
              <img
                className={styles.formIcon3}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <div className={styles.termsAndConditions}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.frame2}>
                    <input className={styles.vector} type="checkbox" />
                  </div>
                  <div className={styles.euAceitoOsTermosECondieWrapper}>
                    <div className={styles.euAceitoOs}>
                      Eu aceito os termos e condições
                    </div>
                  </div>
                </div>
                <div className={styles.policyLink}>
                  <img
                    className={styles.vectorIcon3}
                    loading="lazy"
                    alt=""
                    src="/vector4.svg"
                  />
                  <div className={styles.registrarSe}>Registrar-se</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.vectorIcon4}
          loading="lazy"
          alt=""
          src="/vector2.svg"
        />
      </div>
    </header>
  );
};

export default Frame;
