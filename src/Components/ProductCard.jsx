import React, { useState } from "react";

const ProductCard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="card bg-base-400 max-w-96 shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
           className="rounded-lg "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Metal!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Mitra 80k che shoes aahe !</p>
        <div>
          <div className="stat-value">₹89,400</div>
          <div>Price (per kg)</div>
        </div>
        <div className="rating rating-sm">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        {isAuthenticated && (
          <div className="card-actions justify-between">
            <button className="btn btn-primary">Add To Cart</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        )}
        {!isAuthenticated && (
          <div className="card-actions justify-between">
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-error">Delete</button>
          </div>
        )}

        <div className="flex justify-between ">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask rounded-full h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>

            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-end">
          <time className="text-xs opacity-50">
            12:45
          </time>

          <time className="text-xs opacity-50">
          August 29, 2024
          </time>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
