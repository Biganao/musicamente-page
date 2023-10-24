import { TbCircleArrowRight } from "react-icons/tb";
import styles from "./AboutUs.module.scss";

import AboutImg from "/assets/aboutus-img.png";

const AboutUs = () => {
  return (
    <div
      id="aboutus"
      className={`${styles.AboutUs} flex items-center justify-center`}
    >
      <div
        className={`${styles.container} flex justify-center items-center h-screen w-full`}
      >
        <div className={`${styles.AboutImg}`}>
          <img src={AboutImg} alt="MusicaMente" />
        </div>
        <div className={`${styles.AboutText} flex flex-col text-start`}>
          <h1 className="text-7xl font-bold">
            <span>Sobre</span> Nós
          </h1>
          <p className="text-2xl text-gray-500 mt-4">
          O MusicaMente é um projeto dedicado à música, unindo entusiastas, artistas e amantes de diferentes culturas musicais. Promovemos a expressão e a conexão por meio da música, valorizando a diversidade sonora e inspirando a criatividade.
          </p>
          <button className="flex mt-8 text-white">
            <a href="https://www.instagram.com/musicamente7/">
              Saiba mais
              <TbCircleArrowRight size={27} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
