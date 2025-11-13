import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Error fetching profile:', err));
  }, []);

  if (!profile) return <div className="w-full  min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center pt-16 bg-[#343A40]">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-1 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="mx-auto">
              <img 
                src="../assets/Untitled-131.png" 
                alt="Portfolio"
                className="w-[567.27px] h-[634.94px] rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h1 className="!text-8xl font-normal font-[Provicali] animate-fade-in-up animation-delay-400">
              My portofolio
            </h1>
            <h2 className="text-5xl w-100 leading-15 md:text-6xl font-normal font-['Glasing'] animate-fade-in-up animation-delay-600">
              {profile.name}
            </h2>
            <div className="space-y-2 ">
              <h3 className="text-3xl  md:text-5xl font-semibold">
                {profile.title}
              </h3>
              <p className="text-lg w-72 leading-5 text-gray-300 font-normal font-serif animate-fade-in-up animation-delay-200">
                {profile.subtitle}
                <span className="animate-blink">|</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;