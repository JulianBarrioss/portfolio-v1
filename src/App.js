import React from 'react';

import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import { AboutSection } from './components/AboutSection';
import './App.css';
import { ProjectsSection } from './containers/ProjectsSection';

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}

export default App;
