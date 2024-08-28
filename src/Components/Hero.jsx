import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-base-200 flex-grow">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Junktion!</h1>
          <p className="py-6">
          Junktion is a waste management platform designed to streamline the process of buying and selling scrap materials.The platform connects Kabadiwalas with Scrap-dealers facilitating efficient transactions and promoting sustainable waste management practices.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
