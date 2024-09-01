import React from "react";

const TrendingCategories = () => {
  return (
    <div className="carousel rounded-box flex gap-4 my-3">
      <div className="carousel-item flex flex-col justify-center items-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          alt="Burger"
          className="rounded-full aspect-square h-50 w-40"
        />
        <span>
            Metal
        </span>
      </div>
      <div className="carousel-item flex flex-col justify-center items-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          alt="Burger"
          className="rounded-full aspect-square h-50 w-40"
        />
        <span>
            Paper
        </span>
      </div>
      <div className="carousel-item flex flex-col justify-center items-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          alt="Burger"
          className="rounded-full aspect-square h-50 w-40"
        />
        <span>
            Glass
        </span>
      </div>
      <div className="carousel-item flex flex-col justify-center items-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          alt="Burger"
          className="rounded-full aspect-square h-50 w-40"
        />
        <span>
            Plastic
        </span>
      </div>
      <div className="carousel-item flex flex-col justify-center items-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
          alt="Burger"
          className="rounded-full aspect-square h-50 w-40"
        />
        <span>
            Rubber
        </span>
      </div>
      <div className="carousel-item flex flex-col justify-center items-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
          alt="Burger"
          className="rounded-full aspect-square h-50 w-40"
        />
        <span>
            Copper
        </span>
      </div>
      <div className="carousel-item flex flex-col justify-center items-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
          alt="Burger"
          className="rounded-full aspect-square h-50 w-40"
        />
        <span>
            Iron
        </span>
      </div>
    </div>
  );
};

export default TrendingCategories;
