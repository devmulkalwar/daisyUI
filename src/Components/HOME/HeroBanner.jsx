import React from 'react';
import DeveloperCard from './DeveloperCard';

const HeroBanner = () => {
  const developerHarsh = {
    name: 'Harsh Ninave',
    photo: 'logo5.jpeg',
    role: 'Full Stack Developer',
    specialization: 'React.js, Node.js, MongoDB, Data Structures in Java',
    email: 'harshninave58@gmail.com',
    linkedin: 'https://www.linkedin.com/in/harshninave2004',
    github: 'https://github.com/Harshninave04',
    instagram: 'https://www.instagram.com/harsh__ninave_/',
  };
  const developerDev = {
    name: 'Dev Mulkalwar',
    photo: 'logo5.jpeg',
    role: 'Full Stack Developer',
    specialization: 'React.js, Node.js, MongoDB, Data Structures in cpp',
    email: 'devmulkalwar95@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dev-mulkalwar-b2745a258/',
    github: 'https://github.com/devmulkalwar',
    instagram: 'https://www.instagram.com/dev_mulkalwar/',
  };

  return (
    <div className="flex justify-center items-stretch gap-4 w-full p-4">
      {/* Left Card */}
      <DeveloperCard developer={developerDev} />

      {/* Hero Banner */}
      <div className="relative w-full md:w-2/4 h-auto flex-grow bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1657199988834-6ec84d59b9ce?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex items-center justify-center text-center text-white overflow-hidden rounded-md">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6 py-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Discover amazing products and services tailored for you
          </p>
          <a href="/login">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Get Started
            </button>
          </a>
        </div>
      </div>

      {/* Right Card */}
      <DeveloperCard developer={developerHarsh} />
    </div>
  );
};

export default HeroBanner;
