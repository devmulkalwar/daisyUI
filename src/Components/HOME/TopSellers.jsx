import React from 'react';
import { useProducts } from '../../Context/ProductContext';


const TopSellers = () => {
  const { products } = useProducts();
  return (
    <div className="flex flex-col gap-6 px-4 py-8 rounded-md">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4 text-left">Top Sellers</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {products.map((product) => (
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
