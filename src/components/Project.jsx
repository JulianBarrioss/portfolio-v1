import React from "react";

import "../styles/components/Project.css";

const Project = ({
  src,
  reverse,
  title,
  description,
  tech,
  github,
  pageLink,
}) => {
  return (
    <div className={reverse ? "project reverse" : "project"}>
      <a
        href={pageLink}
        className="project-picture"
        target="_blank"
        rel="noreferrer"
      >
        <img src={src} alt="" />
      </a>

      <div
        className={reverse ? "project-about reverse-about" : "project-about"}
      >
        <a href={pageLink} target="_blank" rel="noreferrer">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
        <ul>
          {tech.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
        <a
          href={github}
          className="project-about-img__container"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://i.ibb.co/F5PQNSm/icons8-github-120.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export { Project };
