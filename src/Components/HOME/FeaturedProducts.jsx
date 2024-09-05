import React from 'react';

// Example data for featured products
const featuredProducts = [
  {
    id: 1,
    image: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
    title: 'Nili Mosambi',
    price: '$29.99',
  },
  {
    id: 2,
    image: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
    title: 'Laal Tattte',
    price: '$39.99',
  },
  {
    id: 3,
    image: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
    title: 'Tattto ka gucccha',
    price: '$49.99',
  },
  {
    id: 4,
    image: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
    title: 'Pila Tatta',
    price: '$59.99',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-left">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="shadow-lg rounded-lg overflow-hidden border-gray-400 border-4 ">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover p-1 rounded-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="mb-4">{product.price}</p>
              <a
                href={`/product/${product.id}`}
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
