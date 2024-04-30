import type { NextPage } from "next";
import styles from "./login.module.css";
import { log } from "console";

const Login: NextPage = () => {

const regexEmail = new RegExp(`[a-zA-Z]+@`)
const regexSenha = new RegExp(`[0-9]{6,}`)
// const regex = new RegExp("[a-z0-9]+@[a-z0-9]{1,}+.[a-z]{1,}+\.([a-z]+)?")

  return (
    <div className={styles.login1}>
      <img className={styles.vectorIcon} alt="" src="/vector1@2x.png" />
      <header className={styles.group}>
        <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
        <div className={styles.registreSe}>Registre-se</div>
      </header>
      <div className={styles.group1} />
      <img className={styles.registerButtonIcon} alt="" src="/vector2.svg" />
      <section className={styles.passwordInputWrapper}>
        <div className={styles.passwordInput}>
          <div className={styles.parentContainer}>
            <h2 className={styles.entrar}>Entrar</h2>
          </div>
          <form className={styles.frameParent}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon2} alt="" src="/vector-1.svg" />
              <div className={styles.vectorGroup}>
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector11.svg"
                />
                <div className={styles.termsAndConditions}>
                  <div className={styles.vector} />
                  <input
                    className={styles.endereoDeEMail}
                    placeholder="Endereço de e-mail"
                    type="text"
                    onChange={e => {
                      console.log(e.target.value);
                      
                      const validation = regexEmail.test(e.target.value)
                      console.log(validation)
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.vectorContainer}>
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/vector11.svg"
                    />
                    <img
                      className={styles.policyLinkIcon}
                      alt=""
                      src="/vector-3.svg"
                    />
                  </div>
                  <input
                    className={styles.senha}
                    placeholder="Senha"
                    type="text"
                    onChange={e => {
                      console.log(e.target.value);
                      
                      const validation = regexSenha.test(e.target.value)
                      console.log(validation)
                    }}
                  />
                
                </div>
                <div className={styles.loginButton}>
                  <div className={styles.esqueceuSuaSenha}>
                    Esqueceu sua senha?
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <button className={styles.frameButton}>
                <img
                  className={styles.vectorIcon5}
                  alt=""
                  src="/vector-4.svg"
                />
                <div className={styles.entrar1}>Entrar</div>
              </button>
            </div>
          </form>
          <div className={styles.passwordInputInner}>
            <div className={styles.frameParent1}>
              <div className={styles.continueComWrapper}>
                <div className={styles.continueCom}>Continue com</div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frame}>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon6}
                      loading="lazy"
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                </div>
                <div className={styles.termsLabel}>
                  <div className={styles.vectorFrame}>
                    <img
                      className={styles.vectorIcon7}
                      loading="lazy"
                      alt=""
                      src="/vector-6.svg"
                    />
                  </div>
                </div>
                <div className={styles.loginLabel}>
                  <div className={styles.frame1}>
                    <div className={styles.closeErrorButtonWrapper}>
                      <img
                        className={styles.closeErrorButton}
                        loading="lazy"
                        alt=""
                        src="/vector-7.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.privacyPolicy}>
        <footer className={styles.termsAndPolicies}>
          <div className={styles.copyrightSymbol}>
            <div className={styles.termosDeServio}>Termos de Serviço</div>
            <div className={styles.nossaPoltica}>Nossa Política</div>
            <div className={styles.contateNos}>Contate-nos</div>
          </div>
          <div className={styles.secondaryFRAME}>
            <div className={styles.praQuemFaz}>© 2024 Pra Quem Faz</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;
