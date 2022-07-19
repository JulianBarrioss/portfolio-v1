import React, { useState, useEffect } from "react";

import "../styles/components/Header.css";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [headerClass, setHeaderClass] = useState({
    headerIn: "header-in",
    main: "main-nav",
    about: "about-nav",
    projects: "projects-nav",
    button: "resume-button",
  });

  const handleScroll = () => {
    if (window !== undefined) {
      if (window.scrollY > lastScroll) {
        setShow(false);
      } else {
        setShow(true);
        setHeaderClass({
          headerIn: "",
          main: "",
          about: "",
          projects: "",
          button: "",
        })
      }
      setLastScroll(window.scrollY);
    }
  };

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScroll]);

  return (
    <header className={`header ${headerClass.headerIn} ${!show && "hidden"}`}>
      <span className="header-logo">
        <a href="/">JulianBarrios</a>
      </span>

      <ul className="header-nav">
        <li className={headerClass.main}>
          <a href="#main">Main</a>
        </li>
        <li className={headerClass.about}>
          <a href="#about">Sobre Mi</a>
        </li>
        <li className={headerClass.projects}>
          <a href="#projects">Proyectos</a>
        </li>
        <li className="resume-nav">
          <a
            href="https://drive.google.com/file/d/1cG4vO0pn8R1VdeoO_yOetw55suPAR27k/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className={headerClass.button}
          >
            CV
          </a>
        </li>
      </ul>
    </header>
  );
};

export { Header };
