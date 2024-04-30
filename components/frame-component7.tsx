import type { NextPage } from "next";
import styles from "./frame-component7.module.css";

const FrameComponent7: NextPage = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" />
          <div className={styles.vectorGroup}>
            <img className={styles.vectorIcon1} alt="" />
            <div className={styles.subComponents}>
              <img className={styles.subComponentsIcon} alt="" />
              <div className={styles.subComponents1}>
                <img className={styles.subComponentsIcon1} alt="" />
                <div className={styles.subComponents2}>
                  <img className={styles.subComponentsIcon2} alt="" />
                  <div className={styles.subComponents3}>
                    <img className={styles.productModulesIcon} alt="" />
                    <div className={styles.vectorContainer}>
                      <img className={styles.vectorIcon2} alt="" />
                      <img
                        className={styles.vectorIcon3}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameGroup}>
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame2.svg"
          />
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-17@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent7;
