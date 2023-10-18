import styles from "./PreRegister.module.scss";

import preregisterImg from "/assets/preregister-img.png";

const PreRegister = () => {
  return (
    <div
      id="preregister"
      className={`${styles.PreRegister} flex items-center justify-center`}
    >
      <section
        className={`${styles.container} flex justify-center items-center h-screen w-full`}
      >
        <div className={styles.Form}>
          <h1 className="text-xl font-semibold text-white">
            <span>Faça</span> o Pre-Registro
          </h1>
          <p className="text-2xl text-gray-500 mt-0">Junte-se à sinfonia musical do MusicaMente! Explore, crie e conecte-se por meio da música em uma experiência enriquecedora e inclusiva. A música aguarda a sua participação!</p>
          <form className="mt-4">
            <div className="mb-4">
              <input
                placeholder="Digite o seu Email"
                type="email"
                id="email"
                className="form-input mt-2"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Informações de Contato */}
        <div className={styles.PreRegisterImg}>
          <img src={preregisterImg} alt="MusicaMente" />
        </div>
      </section>
    </div>
  );
};

export default PreRegister;
