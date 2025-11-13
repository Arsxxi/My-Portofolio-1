import React, { useEffect, useState } from 'react';

const Education = () => {
  const [education, setEducation] = useState([]);
  const [revealedItems, setRevealedItems] = useState({}); 
  const handleReveal = (id) => {
  setRevealedItems(prev => ({ ...prev, [id]: true }));
};

  useEffect(() => {
    fetch('http://localhost:3001/education')
      .then(res => res.json())
      .then(data => setEducation(data))
      .catch(err => console.error('Error fetching education:', err));
  }, []);

  return (
    <section className="py-1 bg-transparant">
      <div className="section-container">
        <h2 className="text-8xl font-bold mb-8 ml-12 text-yellow-500 font-normal font-['Provicali']">Education</h2>
         <div className="space-y-4">
          {education.map((edu) => (
            <div 
              key={edu.id}
              className={`flex items-center gap-4 rounded-lg p-4 ml-12 hover:bg-black w-160 
                transition-all duration-700 ease-out
                ${revealedItems[edu.id] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
                }`}
              onMouseEnter={() => handleReveal(edu.id)}
            >
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">{edu.icon}</span>
                
              </div>
              <div className="flex-1">

                <div className="flex justify-items-end items-start">
                 <span className="text-white text-5xl font-normal font-['Glasing']">{edu.year}</span>
                  <div className="px-10">
                    <h3 className="font-bold text-lg font-normal font-serif">{edu.degree}</h3>
                    <p className="text-white font-normal font-serif">{edu.institution}</p>
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

export default Education;