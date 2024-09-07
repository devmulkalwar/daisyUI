import React from 'react';

const topSellingProducts = [
  {
    id: 1,
    image: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
    title: 'Product 1',
    description: 'A brief description of Product 1.',
    price: 29.99,
  },
  {
    id: 2,
    image: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
    title: 'Product 2',
    description: 'A brief description of Product 2.',
    price: 59.99,
  },
  {
    id: 3,
    image: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
    title: 'Product 3',
    description: 'A brief description of Product 3.',
    price: 19.99,
  },
  {
    id: 4,
    image: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
    title: 'Product 1',
    description: 'A brief description of Product 1.',
    price: 29.99,
  },
//   {
//     id: 5,
//     image: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
//     title: 'Product 2',
//     description: 'A brief description of Product 2.',
//     price: 59.99,
//   },
//   {
//     id: 6,
//     image: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
//     title: 'Product 3',
//     description: 'A brief description of Product 3.',
//     price: 19.99,
//   },
];

const TopSellers = ({ products }) => {
  return (
    <div className="flex flex-col gap-6 px-4 py-8 rounded-md">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4 text-left">Top Sellers</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {topSellingProducts.map((product) => (
          <div
            key={product.id}
            className="shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 duration-300">
            {/* Product Image */}
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>

              {/* Price */}
              <div className="mt-4">
                <span className="text-xl font-bold text-green-600">${product.price}</span>
              </div>

              {/* Add to Cart Button */}
              <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
