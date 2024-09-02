import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-96 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1657199988834-6ec84d59b9ce?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex items-center justify-center text-center text-white overflow-hidden rounded-md">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 px-6 py-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Discover amazing products and services tailored for you
        </p>
        <a href="#get-started">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
