import React from 'react';
import { CiCircleChevDown } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const TrendingCategories = () => {
  const categories = [
    {
      name: 'Metal',
      img: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
    },
    {
      name: 'Paper',
      img: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
    },
    {
      name: 'Glass',
      img: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
    },
    {
      name: 'Plastic',
      img: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
    },
    {
      name: 'Rubber',
      img: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
    },
    {
      name: 'Copper',
      img: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
    },
    {
      name: 'Iron',
      img: 'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp',
    },
    {
      name: 'Iron',
      img: 'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp',
    },
    {
      name: 'Glass',
      img: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
    },
    {
      name: 'Plastic',
      img: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
    },
    {
      name: 'Rubber',
      img: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
    },
    {
      name: 'Copper',
      img: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
    },
    {
      name: 'Iron',
      img: 'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp',
    },
  ];

  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate('/material'); // Redirects to the material page
  };

  const renderCategories = () => {
    const isMobile = window.innerWidth < 768; // Mobile breakpoint, adjust as needed
    const displayLimit = isMobile ? 6 : 10; // Show 6 images for mobile, 10 for larger screens

    return categories.slice(0, displayLimit).map((category, index) => (
      <div key={index} className="flex flex-col items-center text-center">
        <img
          src={category.img}
          alt={category.name}
          className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover shadow-md"
        />
        <span className="mt-2 text-sm font-medium ">{category.name}</span>
      </div>
    ));
  };

  const iconSize = window.innerWidth < 768 ? 'text-4xl' : 'text-6xl'; // Increase icon size for mobile

  return (
    <div className="py-1 px-4">
      <h2 className="text-2xl font-semibold text-left mb-4">Trending Categories</h2>
      <div className="grid grid-cols-3 gap-4 md:grid md:grid-cols-5 lg:flex lg:overflow-x-auto">
        {renderCategories()}
        <div className="col-span-3 md:col-span-5 lg:col-span-1 flex justify-center mt-6">
          <CiCircleChevDown
            onClick={handleIconClick}
            className={`cursor-pointer text-gray-600 ${iconSize}`} // Apply responsive icon size
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;
