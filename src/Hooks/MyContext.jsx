import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
//este es el que me lleva la informacion a cualquier lugar de la app
export const RouteContext = createContext();

export const ContextProvider = ({ children }) => {
  const ruta = useLocation();
  const [activo, setActivo] = useState(ruta.pathname.slice(1) || "home");
  const certificados = [
    {
      img: "/src/img/Finalizacion.jpg",
      nombre: "Programa ONE-G5",
      escuela: "Alura",
      logoE: "/src/Icons/alura-logo.1686744883.svg",
      credencial:
        "https://app.aluracursos.com/program/certificate/04abb103-eb97-4029-9bb5-bf8cc663766d",
    },
    {
      img: "/src/img/Hemer Jose Meza Gutierrez - Formación - Alura_page-0001.jpg",
      nombre: "Front End",
      escuela: "Alura",
      logoE: "/src/Icons/alura-logo.1686744883.svg",
      credencial:
        "https://app.aluracursos.com/degree/certificate/8f7e3da3-5138-480e-b462-0e90f7d89859",
    },
    {
      img: "/src/img/JavaScriptUdemy.jpg",
      nombre: "JavaScript",
      escuela: "Udemy",
      logoE: "/src/Icons/logo-udemy.svg",
      credencial:
        "https://www.udemy.com/certificate/UC-d8a1af61-0579-469b-8ed3-84889871d1f3/",
    },
    {
      img: "/src/img/HTML5Udemy.jpg",
      nombre: "HTML 5",
      escuela: "Udemy",
      logoE: "/src/Icons/logo-udemy.svg",
      credencial:
        "https://www.udemy.com/certificate/UC-ab490d13-e208-4afc-9741-d299ab8674c1/",
    },
    {
      img: "/src/img/Hemer Jose Meza Gutierrez - Formación HTML & CSS - Alura_page-0001.jpg",
      nombre: "HTML & CSS",
      escuela: "Alura",
      logoE: "/src/Icons/alura-logo.1686744883.svg",
      credencial:
        "https://app.aluracursos.com/degree/certificate/4d1e9d5b-6c50-4045-9d4a-bba155355542",
    },
    {
      img: "/src/img/React.jpg",
      nombre: "React",
      escuela: "Alura",
      logoE: "/src/Icons/alura-logo.1686744883.svg",
      credencial:
        "https://app.aluracursos.com/degree/certificate/65fa1945-4575-4029-adf2-b4cb48633f51",
    },
    {
      img: "/src/img/Agility.jpg",
      nombre: "Metodologias Agiles",
      escuela: "Alura",
      logoE: "/src/Icons/alura-logo.1686744883.svg",
      credencial:
        "https://app.aluracursos.com/degree/certificate/04518828-5790-49f3-9b97-81f1170453e0",
    },
    {
      img: "/src/img/Hemer Jose Meza Gutierrez - Curso Git y GitHub_ controle y comparta su código - Alura_page-0001.jpg",
      nombre: "Git & Github",
      escuela: "Alura",
      logoE: "/src/Icons/alura-logo.1686744883.svg",
      credencial:
        "https://app.aluracursos.com/certificate/b3b2ec83-4c9a-4ebe-9977-45452e5128b9",
    },
    {
      img: "/src/img/Arquitectura_page-0001.jpg",
      nombre: "Arquitecturas CSS",
      escuela: "Alura",
      logoE: "/src/Icons/alura-logo.1686744883.svg",
      credencial:
        "https://app.aluracursos.com/certificate/b1139224-983f-4a99-a13c-8fbed3f9d725",
    },
    {
      img: "/src/img/Desarrollo_page-0001.jpg",
      nombre: "Desarrollo Personal",
      escuela: "Alura",
      logoE: "/src/Icons/alura-logo.1686744883.svg",
      credencial:
        "https://app.aluracursos.com/degree/certificate/00da42a2-c294-43f9-a540-b2254946e165",
    },
    {
      img: "/src/img/HTTP_page-0001.jpg",
      nombre: "HTTP",
      escuela: "Alura",
      logoE: "/src/Icons/alura-logo.1686744883.svg",
      credencial:
        "https://app.aluracursos.com/certificate/521475e2-85a6-4042-b23d-7992ea79f428",
    },
    {
      img: "/src/img/ReactRouter_page-0001.jpg",
      nombre: "React Router DOM",
      escuela: "Alura",
      logoE: "/src/Icons/alura-logo.1686744883.svg",
      credencial:
        "https://app.aluracursos.com/certificate/181ba127-4c01-4162-a9dc-16fc9befaaa5",
    },
  ];

  //esta es la informacion a la que puedo acceder
  const values = {
    activo,
    setActivo,
    certificados,
  };
  return (
    //children vendria siendo el hijo, el cual tendra acceso a este context
    <RouteContext.Provider value={values}>{children}</RouteContext.Provider>
  );
};
