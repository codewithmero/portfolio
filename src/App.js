import React from 'react';
import { Header, About, Education, Projects, Footer } from './sections';
import './App.css';

function App(props) {
  return (
    <div className="container">
      <Header />
      <About />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;