import CompPrueba from "./CompPrueba";

const CompHabilidades = () => {
  const habilidades = [
    {
      name: "HTML",
      img: "/src/Icons/icons8-html.svg",
    },
    {
      name: "CSS",
      img: "/src/Icons/icons8-css.svg",
    },
    {
      name: "JavaScript",
      img: "/src/Icons/icons8-javascript.svg",
    },
    {
      name: "React",
      img: "/src/Icons/icons8-reaccionar.svg",
    },
    {
      name: "Git and GitHub",
      img: "/src/Icons/github-mark.svg",
    },
    {
      name: "Figma",
      img: "/src/Icons/icons8-figma.svg",
    },
    {
      name: "Tailwind",
      img: "/src/Icons/icons8-tailwindcss.svg",
    },
    {
      name: "Bootstrap",
      img: "/src/Icons/icons8-oreja.svg",
    },
    {
      name: "Material UI",
      img: "/src/Icons/icons8-material-ui.svg",
    },
  ];

  return (
    <>
      <div className="w-[90%] m-auto flex flex-col items-center justify-center">
        <h2 className="text-center uppercase font-normal  text-4xl sm:text-5xl my-8">
          Mis Certificados
        </h2>
        <div className="flex flex-col flex-wrap sm:flex-row gap-4 justify-between">
          <CompPrueba />
        </div>
      </div>

      <div className="w-[90%] mx-auto mt-auto sm:mt-[90px]">
        <h2 className="text-center uppercase font-normal text-4xl sm:text-5xl my-8">
          Mis Habilidades
        </h2>
        <ul className="list-none p-0 w-[90%] m-auto flex justify-between items-center flex-wrap">
          {habilidades.map((habilidad, index) => (
            <li
              className="flex flex-col items-center justify-center max-w-[125px] grayscale transition-all hover:grayscale-0 hover:transition-all hover:animate-pulse "
              key={index}
            >
              <img src={habilidad.img} alt={habilidad.name} className="h-32" />
              <h3 className="text-white">{habilidad.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CompHabilidades;
