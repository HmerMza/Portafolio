const CompHome = () => {
  return (
    <div className="flex w-11/12 h-[80vh] mt-[5%] m-auto flex-col sm:flex-row items-center sm:items-stretch">
      <img
        src="https://images6.alphacoders.com/637/637352.jpg"
        alt="jhon"
        className="sm:w-1/2 max-h-[450px] rounded-full bg-cover w-[85%]"
      />
      <div className="flex flex-col justify-center items-center text-white gap-6">
        <h1 className="text-center font-bold text-5xl">WEB DEVELOPER</h1>
        <p className="text-center">
          ¡Bienvenido a mi portafolio! Soy Hemer Meza, un apasionado recién
          ingresado al mundo del desarrollo web. Aunque carezco de experiencia
          profesional, tengo una gran motivación y ansias de aprender y trabajar
          en proyectos desafiantes. Con conocimientos básicos de React, mi
          mentalidad abierta, dedicación y disposición para enfrentar nuevos
          desafíos me convierten en un activo valioso para cualquier equipo de
          desarrollo. A través de mi portafolio, podrás explorar mis habilidades
          en desarrollo web y mi enfoque en crear interfaces atractivas y
          funcionales. Estoy emocionado por colaborar con otros profesionales y
          seguir ampliando mis conocimientos en esta emocionante industria.
          ¡Gracias por visitar mi portafolio y espero tener la oportunidad de
          trabajar contigo!
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/63/Firma_de_Lionel_Messi.svg"
          alt=""
          className="w-[110px] brightness-[10000%] saturate-0 my-2"
        />
        <div className="mt-6">
          <ul className="flex list-none p-0 ">
            <li className="ml-6 mr-6 cursor-pointer">
              <img
                src="/src/Icons/github-mark.svg"
                alt="github"
                className="w-20 brightness-[10000%] saturate-0 hover:transition-all ease-in hover:brightness-100 hover:saturate-200 transition-all duration-150 hover:duration-150"
              />
            </li>
            <li className="ml-6 mr-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/640px-LinkedIn_icon.svg.png"
                alt="Linkedin"
                className="w-20"
              />
            </li>
            <li className="ml-6 mr-6">
              <img
                src="/src/Icons/instagramColor.svg"
                alt="Instagram"
                className="w-20 brightness-[10000%] saturate-0 hover:transition-all ease-in hover:brightness-100 hover:saturate-100 transition-all duration-150 hover:duration-150"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompHome;
