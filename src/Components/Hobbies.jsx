import React, { useEffect, useState } from 'react';
import { GiGuitarBassHead } from "react-icons/gi";
import { GiMechanicGarage } from "react-icons/gi";
import { RiBookFill } from "react-icons/ri";
const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/hobbies')
      .then(res => res.json())
      .then(data => setHobbies(data))
      .catch(err => console.error('Error fetching hobbies:', err));
  }, []);
   const iconMap = {
    'GiGuitarBassHead': GiGuitarBassHead,
    'GiMechanicGarage':GiMechanicGarage,
    'RiBookFill':RiBookFill
  };
  const renderIcon = (iconName) => {
    // Jika icon adalah emoji (1-2 karakter), langsung tampilkan
    if (iconName.length <= 2) {
      return <div className="text-5xl mb-4">{iconName}</div>;
    }
    
    
    const IconComponent = iconMap[iconName] || FaGamepad;
    return <IconComponent className="text-7xl text-white mb-4" />;
  };

  return (
    <section className="relative py-16 bottom-32 right-32">
      <div className="section-container">
        <h2 className="relative left-37 text-4xl font-bold mb-8 font-normal font-['Provicali']">Hobbies & Interest</h2>
        <div className="absolute  grid grid-cols-2 gap-12 md:grid-cols-3 ">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="rounded-lg p-8 text-center"
            >
              <div className="text-5xl mb-4">{renderIcon(hobby.icon)}</div>
              <h3 className="font-bold text-xl font-normal font-['Glasing']">{hobby.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;