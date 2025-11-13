import React, { useEffect, useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

const About = () => {
  const [about, setAbout] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isParagraphRevealed, setIsParagraphRevealed] = useState(false); 
  const [isButtonRevealed, setIsButtonRevealed] = useState(false); 

  useEffect(() => {
    fetch('http://localhost:3001/about')
      .then(res => res.json())
      .then(data => setAbout(data))
      .catch(err => console.error('Error fetching about:', err));

    fetch('http://localhost:3001/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Error fetching profile:', err));
  }, []);

  if (!about || !profile) return null;

  return (
    <section id="about" className="bg-[#495057] py-100 ">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6 px-12">
            
             <h2 
              className={`text-8xl fon leading-tight font-normal font-['Provicali'] transition-opacity duration-300
                                                
              ${isRevealed ? 'opacity-100 animate-fade-in-up animation-delay-300' : 'opacity-0'}`}

              onMouseEnter={() => setIsRevealed(true)}
            >
              {about.title}
            </h2>
              <p 
              className={`text-xl font-normal font-serif text-gray-300 transition-all duration-1200
                ${isParagraphRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              onMouseEnter={() => setIsParagraphRevealed(true)}
            >
              {about.description}
            </p>
          <button 
            onClick={() => window.open("https://www.linkedin.com/in/clio-mataheru-02a935339/", "_blank")} 
            className={`btn-primary !bg-[#F5B80E] !font-['Prociono'] text-black flex items-center justify-center gap-2 shadow-lg
              transition-all duration-700 ease-out
              hover:scale-105 hover:bg-yellow-400 hover:shadow-2xl hover:-translate-y-2
              active:scale-95
              ${isButtonRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            onMouseEnter={() => setIsButtonRevealed(true)}
          >
            
            <span className='text-3xl text-black transition-transform duration-500 ease-out hover:rotate-12 hover:scale-110'>  
              <FaLinkedin/>
            </span>
            <span className='text-2xl'>See My Linkedin</span>
        </button>
          </div>
          {/* Contact Card */}
          <div className="justify-center w-180">
            <div className="">
              <img 
                src="/assets/WhatsApp Image 2025-11-12 at 18.49.19_7425f3b3.jpg" 
                alt="Profile"
                className="w-140 h-170  mx-auto object-cover "
              />
            </div>
            <div className="justify-center w-140  h-45 mx-auto bg-[#CED4DA]  ">
                <div className="space-y-4">
                <h3 className="text-5xl  font-normal font-['Provicali'] text-center text-black">Contact</h3>
                <div className="space-y-2 text-black text-3xl  font-normal font-['Glasing']">
                    <p className="flex items-center justify-center gap-2">
                    <span>  
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>

                    </span>
                    <span>{profile.contact.email}</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>

                    </span>
                    <span>{profile.contact.phone}</span>
                    </p>
                </div>
                </div>
            <div/>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;