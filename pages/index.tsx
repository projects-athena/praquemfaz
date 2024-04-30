import type { NextPage } from "next";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent11 from "../components/frame-component11";
import FrameComponent10 from "../components/frame-component10";
import FrameComponent12 from "../components/frame-component12";
import FrameComponent13 from "../components/frame-component13";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home1}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <section className={styles.frameParent}>
        <FrameComponent6 />
        <FrameComponent11 />
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame-1.svg"
          />
        </div>
      </section>
      <div className={styles.home1Inner}>
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group-3@2x.png" />
          <img
            className={styles.groupIcon1}
            loading="lazy"
            alt=""
            src="/group-4.svg"
          />
          <h2 className={styles.cozinhaContempornea}>Cozinha Contemporânea</h2>
        </div>
      </div>
      <section className={styles.frameGroup}>
        <img
          className={styles.frameIcon1}
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group.svg"
        />
        <div className={styles.weeklyTrends}>
          <FrameComponent10 />
          <FrameComponent12 />
        </div>
      </section>
      <div className={styles.home1Child}>
        <div className={styles.frameContainer}>
          <div className={styles.maskGroupWrapper}>
            <img
              className={styles.maskGroupIcon1}
              loading="lazy"
              alt=""
              src="/mask-group-4.svg"
            />
          </div>
          <div className={styles.explorarWrapper}>
            <div className={styles.explorar}>Explorar</div>
          </div>
          <div className={styles.cursos}>Cursos</div>
          <div className={styles.podcasts}>Podcasts</div>
          <div className={styles.busca}>Busca</div>
        </div>
      </div>
      <FrameComponent13 />
    </div>
  );
};

export default Home;
