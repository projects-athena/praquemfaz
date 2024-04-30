import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import styles from "./register.module.css";

const Register: NextPage = () => {
  return (
    <div className={styles.register1}>
      <FrameComponent3 />
      <div className={styles.register1Inner}>
        <div className={styles.endereoDeEMailParent}>
          <div className={styles.endereoDeEMail}>Endereço de e-mail</div>
          <div className={styles.senhaWrapper}>
            <div className={styles.senha}>Senha</div>
          </div>
          <div className={styles.confirmeSuaSenha}>Confirme sua senha</div>
        </div>
      </div>
      <div className={styles.register1Child}>
        <div className={styles.registreSeComParent}>
          <div className={styles.registreSeCom}>Registre-se com</div>
          <div className={styles.frameWrapper}>
            <div className={styles.appleLogoInputParent}>
              <div className={styles.appleLogoInput}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-41.svg"
                />
              </div>
              <div className={styles.linkedInLogoInput}>
                <img
                  className={styles.passwordConfirmationLabel}
                  loading="lazy"
                  alt=""
                  src="/vector-51.svg"
                />
              </div>
              <div className={styles.accountCreationProgressBarWrapper}>
                <div className={styles.accountCreationProgressBar}>
                  <img
                    className={styles.vectorIcon1}
                    loading="lazy"
                    alt=""
                    src="/vector-61.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.frameFooter}>
        <div className={styles.frameParent}>
          <div className={styles.termosDeServioParent}>
            <div className={styles.termosDeServio}>Termos de Serviço</div>
            <div className={styles.nossaPoltica}>Nossa Política</div>
            <div className={styles.contateNos}>Contate-nos</div>
          </div>
          <div className={styles.praQuemFazWrapper}>
            <div className={styles.praQuemFaz}>© 2024 Pra Quem Faz</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;
