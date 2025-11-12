import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/activities')
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.error('Error fetching activities:', err));
  }, []);

  return (
    <section className="relative left-[30px] mt-12  py-16 rounded-2xl  bg-[#343A40] w-150 ">
      <div className="section-container">
        <h2 className="text-6xl font-bold mb-8 ml-12 font-normal font-['Provicali']">Activities</h2>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="flex items-center gap-4 rounded-lg p-4 hover:bg-gray-500 transition-colors duration-300"
            >
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-yellow-500">●</span>
              </div>
              <span className="text-white text-4xl font-normal font-['Glasing']">{activity.year}</span>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg font-normal font-serif">{activity.role}</h3>
                    <p className="text-white font-normal font-serif">{activity.organization}</p>
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

export default Activities;