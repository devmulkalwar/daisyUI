import React from 'react';

const HomeCarousel = () => {
  const carouselImages = [
    'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
    'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
    'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
    'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
    'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
    'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
    'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp',
    'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
    'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
    'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp',
  ];

  return (
    <div className="carousel carousel-center w-full bg-neutral rounded-box space-x-4 p-4 overflow-x-auto my-4">
      {carouselImages.map((src, index) => (
        <div key={index} className="carousel-item flex-shrink-0 w-48 h-48 ">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="rounded-md object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default HomeCarousel;
