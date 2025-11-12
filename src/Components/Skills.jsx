import React, { useEffect, useState } from 'react';
import { SiFigma, SiAdobexd, SiFramer, SiBlender } from 'react-icons/si';

const Skills = () => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/skills')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error('Error fetching skills:', err));
  }, []);

  if (!skills) return null;

  const getIcon = (iconName) => {
    const icons = {
      figma: SiFigma,
      adobe: SiAdobexd,
      framer: SiFramer,
      blender: SiBlender
    };
    const Icon = icons[iconName] || SiFigma;
    return <Icon className="text-2xl" />;
  };

  return (
        <section className="py-16 pl-30 mt-12 bg-transparent">
    <div className="section-container">
        {/* Bagi jadi 2 kolom */}
        <div className="grid md:grid-cols-2 gap-1">
        
        {/* Kolom kiri - Software Skills */}
        <div>
            <h2 className="relative left-[250px] text-5xl font-bold mb-6 font-normal font-['Provicali'] ">Technical skills</h2>

            {/* Software Skills */}
            <div className="mt-12 ">
            <h3 className="relative left-[120px] text-3xl font-semibold mb-4 font-normal font-['Glasing']">Software Skills</h3>
            <div className="relative left-[102px]  grid grid-cols-1  ">
                {skills.software.map((skill, index) => (
                <div 
                    key={index}
                    className="flex items-center gap-2 rounded-lg p-3 text-xl font-normal font-serif"
                >
                    {getIcon(skill.icon)}
                    <span>{skill.name}</span>
                </div>
                ))}
            </div>
            </div>
        </div>

        {/* Kolom kanan - Coding Skills */}
        <div className='relative right-[102px] pr-22 mt-6'>
            <h3 className="text-3xl font-semibold mb-4 mt-2 md:mt-16 font-normal font-['Glasing']">Coding Skills</h3>
            <div className="space-y-6 gap-2 flex flex-wrap  justify-items-center">
            {skills.coding.map((skill, index) => (
                <div key={index} className="bg-gray-600 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-medium font-normal font-serif">{skill.name}</span>
                    <span className="text-sm text-gray-300 ml-12 font-normal font-serif">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                    className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                    style={{
                        width: skill.level === 'Advanced' ? '90%' : 
                            skill.level === 'Intermediate' ? '60%' : '30%'
                    }}
                    ></div>
                </div>
                </div>
            ))}
            </div>
        </div>

        </div>
    </div>
    </section>
  );
};

export default Skills;