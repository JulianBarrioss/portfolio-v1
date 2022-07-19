import React from "react";

import "../styles/components/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="aboutSection" id="about">
      <h2>Sobre Mi</h2>
      <div className="aboutSection-container">
        <p>
          Hola! Soy Julian y soy un desarrollador Front-End de Guatemala,
          joven entusiasta y busco un puesto Junior para finalmente comenzar mi
          carreta y aprender entre profesionales.
        </p>
        <p>
          Estoy emocionado de dar el siguiente paso y continuar perfeccionando
          mis habilidades con la compañía adecuada.
        </p>
        <p>
          Estas son algunas tecnologías con las que he estado trabajando
          recientemente:
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>Git / Github</li>
        </ul>
      </div>
    </section>
  );
};

export { AboutSection };
