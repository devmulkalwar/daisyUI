import React from 'react';
import CountdownTimer from './CountdownTimer';

const AdBanner = () => {
  return (
    <div className="rounded-md border-neutral border-4">
      <div className="bg-gray-800 text-white py-4 px-6 shadow-lg rounded-md">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Special Offer!</h2>
            <p className="text-lg">
              Save 30% on all orders this week only. Don't miss out on our exclusive deals!
            </p>
          </div>
          <a
            href="/shop-now"
            className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
            Shop Now
          </a>
        </div>
        <CountdownTimer targetDate={new Date('2024-09-13T23:59:59')} />
      </div>
    </div>
  );
};

export default AdBanner;
 