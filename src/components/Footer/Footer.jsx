import { BsGithub, BsInstagram } from "react-icons/bs";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterLinks}>
        <div className={styles.LinksContact}>
          <h1 className={styles.HeadText}>
            <span>Contate</span>-nós
          </h1>
          <p>musicamente@gmail.com</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-344-1230</p>
        </div>
        <div className={styles.LinksLogo}>
          <h1 className={styles.LogoName}>
            <span>Musica</span>Mente
          </h1>
          <p>
            &quot;A música é o vínculo que une a vida do espírito à vida dos
            sentidos. A melodia é a vida sensível da poesia.&quot;
          </p>
          <div className={styles.borderline}></div>
          <div className={styles.LinksIcons}>
            <a href="" target="blank">
              <BsGithub />
            </a>
            <a href="" target="blank">
              <BsInstagram />
            </a>
          </div>
        </div>
        <div className={styles.LinksWork}>
          <h1 className={styles.HeadText}>
            {" "}
            <span>Informações</span> Legais
          </h1>
          <p> FAQ </p>
          <p> Politica de Privacidade</p>
          <p> Termos e Condições</p>
        </div>
      </div>
      <div className={styles.Copyright}>
        <p>2023 MusicaMente. Todos os Direitos Reservados</p>
      </div>
    </div>
  );
};

export default Footer;
