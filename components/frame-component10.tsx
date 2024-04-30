import type { NextPage } from "next";
import styles from "./frame-component10.module.css";

const FrameComponent10: NextPage = () => {
  return (
    <div className={styles.mediaDigitals}>
      <h2 className={styles.lanamentosDaSemana}>Lançamentos da Semana</h2>
      <div className={styles.categoriesList}>
        <div className={styles.groupParent}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-5@2x.png"
          />
          <div className={styles.marketingDigitalParent}>
            <div className={styles.marketingDigital}>Marketing Digital</div>
            <div className={styles.marketing}>Marketing</div>
          </div>
        </div>
        <div className={styles.groupGroup}>
          <img
            className={styles.groupIcon1}
            loading="lazy"
            alt=""
            src="/group-6@2x.png"
          />
          <div className={styles.gastronomiaBsicaParent}>
            <div className={styles.gastronomiaBsica}>Gastronomia Básica</div>
            <div className={styles.nutrio}>Nutrição</div>
          </div>
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
