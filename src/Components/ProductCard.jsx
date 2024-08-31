import React, { useState } from 'react';

const ProductCard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div className="card bg-gradient-to-r from-slate-500 to-slate-800 max-w-xs sm:max-w-sm md:max-w-md shadow-2xl rounded-lg overflow-hidden text-white mx-auto">
      <figure className="px-4 pt-4 relative">
        {' '}
        {/* Adjusted padding */}
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-lg transform transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-secondary text-white py-1 px-2 rounded-md shadow-lg">
          NEW
        </div>
      </figure>
      <div className="card-body p-4">
        {' '}
        {/* Adjusted padding */}
        <h2 className="card-title text-2xl sm:text-3xl font-bold mb-1">Metal Shoes</h2>
        <p className="text-base sm:text-lg mb-3">Mitra 80k che shoes aahe!</p>
        <div className="mb-1">
          <div className="text-3xl sm:text-4xl font-bold">₹89,400</div>
          <div className="text-sm opacity-75">Price (per kg)</div>
        </div>
        <div className="rating rating-sm mb-2">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-yellow-400"
            defaultChecked
          />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
        </div>
        {isAuthenticated ? (
          <div className="card-actions justify-between">
            <button className="btn btn-primary hover:scale-105 transform transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>

            <button className="btn btn-primary hover:scale-105 transform transition-transform duration-300">
              Buy Now
            </button>
          </div>
        ) : (
          <div className="card-actions justify-between">
            <button className="btn btn-info hover:bg-info-dark transform transition-transform duration-300">
              Edit
            </button>
            <button className="btn btn-error hover:bg-red-600 transform transition-transform duration-300">
              Delete
            </button>
          </div>
        )}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="mask rounded-full h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>

            <div>
              <div className="font-bold text-lg">Yancy Tear</div>
              <div className="text-sm opacity-75">Brazil</div>
            </div>
          </div>

          <div className="flex flex-col items-end text-xs opacity-75">
            <time>12:45</time>
            <time>August 29, 2024</time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
