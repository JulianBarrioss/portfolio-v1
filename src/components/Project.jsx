import React from "react";

import '../styles/components/Project.css'

const Project = ({ src, reverse, title, description, tech }) => {
  return (
    <div className={reverse ? 'project reverse' : 'project'}>
      <picture className="project-picture">
        <img src={src} alt="" />
      </picture>

      <div className={reverse ? 'project-about reverse-about' : 'project-about'}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {tech.map((e) => <li>{e}</li>)}
        </ul>
      </div>
    </div>
  );
};

export { Project };
