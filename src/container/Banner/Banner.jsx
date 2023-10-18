import Hero from "/assets/hero-img.png";
import { TbCircleArrowRight } from "react-icons/tb";

import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div
      id="home"
      className={`${styles.banner} flex items-center justify-center`}
    >
      <div
        className={`${styles.container} flex justify-center items-center h-screen w-full`}
      >
        <div className={`${styles.bannerText} flex flex-col text-start`}>
          <h1 className="text-7xl font-bold">
            <span>Musica</span>Mente
          </h1>
          <p className="text-2xl text-gray-500 mt-4">
          Nossa aplicação é o portal para o mundo musical. Desfrute de perfis personalizados, descubra novos gêneros, acesse informações sobre eventos e recursos educacionais. Junte-se a uma comunidade que celebra a diversidade musical e embarque nessa jornada conosco.
          </p>
          <button className="flex mt-8 text-white">
            <a href="#preregister">
              Faça o Pré-Registro
              <TbCircleArrowRight size={27} />
            </a>
          </button>
        </div>
        <div className={`${styles.heroImg}`}>
          <img src={Hero} alt="MusicaMente" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
