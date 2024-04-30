import type { NextPage } from "next";
import styles from "./frame-component12.module.css";

const FrameComponent12: NextPage = () => {
  return (
    <div className={styles.cursosMaisCompradosParent}>
      <h2 className={styles.cursosMaisComprados}>Cursos Mais Comprados</h2>
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-7@2x.png"
          />
          <div className={styles.mdiasDigitaisParent}>
            <div className={styles.mdiasDigitais}>Mídias Digitais</div>
            <div className={styles.profArthurBernardes}>
              Profº Arthur Bernardes
            </div>
          </div>
          <h2 className={styles.categorias}>Categorias</h2>
        </div>
        <div className={styles.groupGroup}>
          <img
            className={styles.groupIcon1}
            loading="lazy"
            alt=""
            src="/group-8@2x.png"
          />
          <div className={styles.anliseDeMercadoParent}>
            <div className={styles.anliseDeMercado}>Análise de Mercado</div>
            <div className={styles.profAnaCosta}>Profª Ana Costa</div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.groupContainer}>
            <img className={styles.groupIcon2} alt="" src="/group-9.svg" />
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group-1.svg"
            />
          </div>
          <img className={styles.groupIcon3} alt="" src="/group-10.svg" />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.groupParent1}>
            <img
              className={styles.groupIcon4}
              loading="lazy"
              alt=""
              src="/group-11.svg"
            />
            <div className={styles.negcios}>Negócios</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.groupParent2}>
              <img className={styles.groupIcon5} alt="" src="/group-9.svg" />
              <img
                className={styles.maskGroupIcon1}
                loading="lazy"
                alt=""
                src="/mask-group-2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <div className={styles.groupParent3}>
              <img className={styles.groupIcon6} alt="" src="/group-13.svg" />
              <img
                className={styles.maskGroupIcon2}
                loading="lazy"
                alt=""
                src="/mask-group-3.svg"
              />
            </div>
          </div>
          <div className={styles.groupParent4}>
            <img
              className={styles.groupIcon7}
              loading="lazy"
              alt=""
              src="/group-14.svg"
            />
            <div className={styles.gastronomia}>Gastronomia</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent12;
