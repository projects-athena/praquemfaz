import type { NextPage } from "next";
import JoaoSilvaLabel from "../components/joao-silva-label";
import FrameComponent1 from "../components/frame-component1";
import ColumnGrid from "../components/column-grid";
import FrameComponent from "../components/frame-component";
import styles from "./home-usurio.module.css";

const HomeUsurio: NextPage = () => {
  return (
    <div className={styles.homeUsurio1}>
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <img className={styles.groupIcon1} alt="" src="/group1.svg" />
      <JoaoSilvaLabel />
      <img
        className={styles.vectorIcon1}
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <img className={styles.groupIcon2} alt="" src="/group-15.svg" />
      <img
        className={styles.frameIcon}
        loading="lazy"
        alt=""
        src="/frame-4.svg"
      />
      <section className={styles.frameParent}>
        <FrameComponent1 />
        <ColumnGrid />
        <div className={styles.alignLeft}>
          <div className={styles.distributeSpaceEvenly}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group-4.svg"
            />
            <img
              className={styles.fillContentIcon}
              loading="lazy"
              alt=""
              src="/frame-6.svg"
            />
          </div>
          <div className={styles.fitContent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.frameIcon1}
                    loading="lazy"
                    alt=""
                    src="/frame-7.svg"
                  />
                </div>
                <div className={styles.explorar}>Explorar</div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameFrame}>
                  <img
                    className={styles.frameIcon2}
                    loading="lazy"
                    alt=""
                    src="/frame-8.svg"
                  />
                </div>
                <div className={styles.cursos}>Cursos</div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper1}>
                <img
                  className={styles.frameIcon3}
                  loading="lazy"
                  alt=""
                  src="/frame-5.svg"
                />
              </div>
              <div className={styles.podcasts}>Podcasts</div>
            </div>
            <div className={styles.buscaWrapper}>
              <div className={styles.busca}>Busca</div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default HomeUsurio;
