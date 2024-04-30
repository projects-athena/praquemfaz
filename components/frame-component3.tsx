import type { NextPage } from "next";
import Frame from "./frame";
import styles from "./frame-component3.module.css";

const FrameComponent3: NextPage = () => {
  return (
    <section className={styles.frameParent}>
      <Frame />
      <div className={styles.registreSeWrapper}>
        <h3 className={styles.registreSe}>Registre-se</h3>
      </div>
    </section>
  );
};

export default FrameComponent3;
