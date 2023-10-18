import styles from "./Dynamics.module.scss";

import { BsMusicNote } from "react-icons/bs";
import { FaUserGroup  } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";

const Dynamics = () => {
  return (
    <div id="dynamics" className={`${styles.Dynamics} flex items-center justify-center`}>
      <section className={`${styles.container} flex justify-center items-center h-screen w-full`}>
        <div className={`${styles.DynamicsText} container mx-auto text-center`}>
          <h1 className="text-4xl font-semibold text-gray-800 mb-8">
            <span>Explore</span> as Funcionalidades
          </h1>
          <div className={`${styles.grid} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
            <div className={`${styles.card} p-12 rounded-lg shadow-lg`}>
              <span>
                <BsMusicNote size={25} />
              </span>
              <h3 className="text-xl font-semibold text-gray-800">
                Aprimore-se
              </h3>
              <p className="mt-4 text-gray-500">
              Desenvolva suas habilidades musicais com aulas, tutoriais e dicas em &quot;Aprimore-se&quot;. Aprendizado para iniciantes e músicos experientes.
              </p>
            </div>

            <div className={`${styles.card} p-12 rounded-lg shadow-lg`}>
              <span>
                <FaUserGroup size={23} />
              </span>
              <h3 className="text-xl font-semibold text-gray-800">
                Comunidade
              </h3>
              <p className="mt-4 text-gray-500">
              Conecte-se com entusiastas da música em &quot;Comunidade&quot;. Compartilhe experiências, participe de discussões e celebre a diversidade musical.
              </p>
            </div>

            <div className={`${styles.card} p-12 rounded-lg shadow-lg`}>
              <span>
                <MdEvent size={25} />
              </span>
              <h3 className="text-xl font-semibold text-gray-800">Eventos</h3>
              <p className="mt-4 text-gray-500">
              Mantenha-se atualizado sobre shows, festivais e mais em &quot;Eventos&quot;. Explore a cena musical local e mergulhe na música ao vivo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dynamics;
