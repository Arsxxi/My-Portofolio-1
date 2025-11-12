import React, { useEffect, useState } from 'react';

const Languages = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/languages')
      .then(res => res.json())
      .then(data => setLanguages(data))
      .catch(err => console.error('Error fetching languages:', err));
  }, []);

  return (
    <section className="relative right-33 py-16">
      <div className="section-container">
        <h2 className="text-5xl font-bold mb-8 px-30 text-black font-normal font-['Provicali']">Languages</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {languages.map((lang, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 "
            >
              <h3 className="font-bold text-3xl mb-2 text-black font-normal font-['Glasing']">{lang.name}</h3>
              <p className="text-black text-xl pr-10 font-normal font-serif ">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;