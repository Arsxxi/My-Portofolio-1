import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-transparant  z-50 shadow-xl">
      <nav className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <a 
              href="#home" 
              className= "justify-between !text-white font-normal font-['Prociono'] hover:!text-yellow-500 !transition-colors !duration-300"
            >
              Home
            </a>
            <a 
              href="#profile" 
              className="!text-white font-normal font-['Prociono'] hover:!text-yellow-500 !transition-colors !duration-300"
            >
              Profile
            </a>
          </div>
          
          <a 
            href="#contact" 
            className="!text-white font-normal font-['Prociono']  hover:!text-yellow-500 !transition-colors !duration-300"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;