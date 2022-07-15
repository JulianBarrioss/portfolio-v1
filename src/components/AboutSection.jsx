import React from "react";

import "../styles/components/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="aboutSection" id="about">
      <h2>About</h2>
      <div className="aboutSection-container">
      <div className="aboutSection-about">
        <p>
          I'm an enthusiastic and detail-oriented Frontend Software Engineer
          seeking an entry-level position with Company to use my skills in
          coding, troubleshooting complex problems, and assisting in the timely
          completion of projects.
        </p>
      </div>
      <div className="aboutSection-tech">
        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>Git / Github</li>
        </ul>
      </div>
      </div>
      
    </section>
  );
};

export { AboutSection };
