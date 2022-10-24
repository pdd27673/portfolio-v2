import React from 'react';
import './App.scss';

import { Header, About, Footer, Skills, Testimonial, Work, Contact } from './toolkit/sections';
import { Navbar } from './toolkit/components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
