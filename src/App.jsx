import React from 'react';

import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Languages from './Components/Languages';
import Activities from './Components/Activities';
import Hobbies from './Components/Hobbies';

function App() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <main>
        <Hero />
         <section className="w-full min-h-150 flex items-center justify-center pt-16 bg-[#373D42]">
         </section>
        <About />
        
        <section className="flex w-full min-h-150   bg-[#585E63]">
          <Education/>
          <Skills />
        </section>
        <section className="grid grid-cols-2 c h-250 pb-122 items-center bg-[#6C757D]">
          <Experience />
          <Languages />
          <Activities/>
          <Hobbies />
        </section>
      </main>
      <footer className="bg-[#495057] py-20 text-center text-white">
        <p>&copy; 2025 Clio Marco Mataheru. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;