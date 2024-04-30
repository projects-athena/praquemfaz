import type { NextPage } from "next";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent9 from "../components/frame-component9";
import styles from "./product-details.module.css";

const ProductDetails: NextPage = () => {
  return (
    <div className={styles.productDetails1}>
      <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
      <img className={styles.groupIcon} alt="" src="/group3@2x.png" />
      <FrameComponent7 />
      <img className={styles.groupIcon1} alt="" src="/group-15.svg" />
      <section className={styles.frameParent}>
        <FrameComponent8 />
        <FrameComponent9 />
        <div className={styles.frameGroup}>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group-4.svg"
            />
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame-6.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.coursesListParent}>
              <div className={styles.coursesList}>
                <div className={styles.moduleProjectsFunctionsWrapper}>
                  <img
                    className={styles.moduleProjectsFunctions}
                    loading="lazy"
                    alt=""
                    src="/frame-7.svg"
                  />
                </div>
                <div className={styles.explorar}>Explorar</div>
              </div>
              <div className={styles.coursesList1}>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.frameIcon1}
                    loading="lazy"
                    alt=""
                    src="/frame-8.svg"
                  />
                </div>
                <div className={styles.cursos}>Cursos</div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameFrame}>
                <img
                  className={styles.frameIcon2}
                  loading="lazy"
                  alt=""
                  src="/frame-5.svg"
                />
              </div>
              <div className={styles.podcasts}>Podcasts</div>
            </div>
            <div className={styles.buscaParent}>
              <div className={styles.busca}>Busca</div>
              <img
                className={styles.frameIcon3}
                loading="lazy"
                alt=""
                src="/frame-4.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
