import React from "react";
import { Project } from "../components/Project";

import "../styles/containers/ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <div className="projectsSection" id="projects">
      <h2>Projects</h2>
      <a href="https://vinylshop.netlify.app" target="_blank" rel="noreferrer">
        <Project
          src={"https://i.ibb.co/ctqqDpF/asdf.png"}
          title={"Vinyl-Shop"}
          description={
            "Una tienda creada en React.js usando LocalStorage, y la React Context API"
          }
          tech={["React.js", "MaterialUI"]}
        />
      </a>
      <a
        href="https://expense-trackerp2.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <Project
          src={"https://i.ibb.co/txYvYtx/expensess.png"}
          reverse
          title={"Expense Tracker"}
          description={
            "A web app created in React.js, that helps you keep control of your incomes and expenses wich uses: LocalStorage, and the React Context API."
          }
          tech={["React.js", "MaterialUI", "Chart.js"]}
        />
      </a>

      <a
        href="https://movie-finderp3.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <Project
          src={"https://i.ibb.co/YTpW3Ys/movie.png"}
          title={"Movie Finder"}
          description={
            "A web app that helps you keep control of your incomes and expenses wich uses: LocalStorage, "
          }
          tech={["React.js", "MaterialUI", "Chart.js"]}
        />
      </a>
      <a
        href="https://wordle-clonep4.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <Project
          src={"https://i.ibb.co/Sx19H3w/wordleclone.png"}
          reverse
          title={"Wordle Clone"}
          description={
            "A  clone of wordle created in React.js, wich uses Redux"
          }
          tech={["React.js", "MaterialUI", "Chart.js"]}
        />
      </a>
      {/* <Project src={"https://i.ibb.co/ctqqDpF/asdf.png"} reverse />
      <Project src={"https://i.ibb.co/ctqqDpF/asdf.png"} />
      <Project src={"https://i.ibb.co/ctqqDpF/asdf.png"} reverse /> */}
    </div>
  );
};

export { ProjectsSection };
