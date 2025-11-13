import React, { useEffect, useState } from 'react';

const Experience = () => {
  const [experience, setExperience] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3001/experience')
      .then(res => res.json())
      .then(data => setExperience(data))
      .catch(err => console.error('Error fetching experience:', err));
  }, []);

  return (
    <section className="py-16 ml-7 mt-12 bg-yellow-500 w-150 rounded-2xl">
      <div className="section-container">
        <h2 className="text-7xl font-bold mb-8 ml-12 text-black font-normal font-['Provicali']">Experience</h2>
        <div className="space-y-4">
          {experience.map((exp) => (
            <div 
              key={exp.id}
              className="flex items-center gap-4  rounded-lg p-4 hover:bg-white transition-colors duration-300"
            >
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">★</span>
              </div>
              <span className="text-gray-800 text-4xl font-semibold font-normal font-['Glasing']">{exp.year}</span>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-black font-normal font-serif">{exp.position}</h3>
                    <p className="text-gray-800 font-normal font-serif">{exp.company}</p>
                  </div>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;