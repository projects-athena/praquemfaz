import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";
import styles from "./frame-component1.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <FrameComponent2
            group="/group-12.svg"
            frame="/frame-41.svg"
            marketing="Marketing"
          />
          <FrameComponent2
            group="/group-131.svg"
            frame="/frame-51.svg"
            marketing="Finanças"
            propFlex="0.9016"
            propPadding="0px var(--padding-mid) 0px var(--padding-3xs)"
            propMinWidth="55px"
          />
        </div>
        <h2 className={styles.meusCursos}>Meus Cursos</h2>
      </div>
      <div className={styles.groupParent}>
        <img className={styles.groupIcon} alt="" src="/group-12.svg" />
        <img
          className={styles.filterOptionsIcon}
          loading="lazy"
          alt=""
          src="/frame-61.svg"
        />
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group-31.svg"
        />
      </div>
      <div className={styles.logoArea}>
        <div className={styles.groupGroup}>
          <img className={styles.groupIcon1} alt="" src="/group-131.svg" />
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame-71.svg"
          />
          <img
            className={styles.maskGroupIcon1}
            loading="lazy"
            alt=""
            src="/mask-group-41.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
