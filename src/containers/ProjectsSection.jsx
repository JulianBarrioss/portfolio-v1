import React from "react";
import { Project } from "../components/Project";

import "../styles/containers/ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <div className="projectsSection" id="projects">
      <h2>Algunas cosas que he programado</h2>
      <Project
        src={"https://i.ibb.co/pzsHFDM/Captura-de-pantalla-2022-07-19-214424.png"}
        title={"Vinyl-Shop"}
        description={
          "Una tienda en linea creada con React.js usando LocalStorage, Firebase Authentication y la React Context API"
        }
        tech={["React.js", "Firebase", "React Context API", "MaterialUI"]}
        pageLink={"https://vinylshop.netlify.app"}
        github={"https://github.com/JulianBarrioss/Vinyl-Shop"}
      />
      <Project
        src={"https://i.ibb.co/txYvYtx/expensess.png"}
        title={"Expense Tracker"}
        description={
          "Una herramienta creada con React.js que te ayuda a tener el registro de tus gastos y tus ingresos, este proyecto usa LocalStorage, y React Context API"
        }
        reverse
        tech={["React.js", "Chart.js", "React Context API", "Material UI"]}
        pageLink={"https://expense-trackerp2.netlify.app"}
        github={"https://github.com/JulianBarrioss/expense-tracker"}
      />
      <Project
        src={"https://i.ibb.co/YTpW3Ys/movie.png"}
        title={"Movie Finder"}
        description={
          "Un buscador de peliculas creado con React.js usando la API de The Movie Database"
        }
        tech={["React.js", "Axios", "The Movie Database", "React Context API"]}
        pageLink={"https://movie-finderp3.netlify.app/"}
        github={"https://github.com/JulianBarrioss/movie-finder"}
      />
      <Project
        src={"https://i.ibb.co/Sx19H3w/wordleclone.png"}
        title={"Wordle Clone"}
        description={
          "Un clon del famoso juego de palabras Wordle creado con React.js"
        }
        tech={["React.js", "Redux Toolkit", "React Icons"]}
        reverse
        pageLink={"https://wordle-clonep4.netlify.app/"}
        github={"https://github.com/JulianBarrioss/wordle-clone"}
      />
    </div>
  );
};

export { ProjectsSection };
