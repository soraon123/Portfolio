import React, { useEffect } from 'react';


import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import image from './gradient.png';

const App = () => {
  

  return (
    <>
      <img className='absolute top-0 right-0 opacity-60 -z-1' src={image} alt="Gradient-png" />

      <div className='h-0 w-[40rem] absolute to-[20%] right-[-5%] shadow-[0_0_900px_20px_#A8DADC] -rotate-[30deg] -z-10'></div>
      <Header />
    
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
