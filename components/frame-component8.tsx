import type { NextPage } from "next";
import styles from "./frame-component8.module.css";

const FrameComponent8: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.maskGroupParent}>
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group2.svg"
        />
        <img
          className={styles.maskGroupIcon1}
          loading="lazy"
          alt=""
          src="/mask-group-12.svg"
        />
        <div className={styles.frameGroup}>
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame-11.svg"
          />
          <div className={styles.frame}>
            <div className={styles.avaliaes}>{`5 avaliações `}</div>
          </div>
        </div>
      </div>
      <div className={styles.groupWrapper}>
        <img className={styles.groupIcon} alt="" src="/group-32.svg" />
      </div>
    </div>
  );
};

export default FrameComponent8;
