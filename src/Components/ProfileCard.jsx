import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-evenly flex-wrap max-w-screen my-8">
      {/* Profile Section */}

      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-20 lg:w-24 rounded-full ring ring-offset-2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Profile"
          />
        </div>
      </div>

      <div className="flex flex-col text-left ">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-semibold text-primary m-1">John Doe</span>
          <button className="btn btn-neutral btn-xs rounded-lg">Edit</button>
        </div>
        <span className="text-sm">Kabadiwala</span>
        <span className="text-sm">devmulkalwar95@gmail.com</span>
        <span className="text-sm">+91 9322259967</span>
        <span className="text-sm">Pune</span>
      </div>

      <div className="stats bg-base-200 flex ">
        <div className="stat flex flex-col">
          <div className="stat-title text-sm">Products</div>
          <div className="stat-value text-primary text-xl">25.6K</div>
        </div>
        <div className="stat flex flex-col">
          <div className="stat-title text-sm">Rating</div>
          <div className="stat-value text-secondary text-xl">2.6M</div>
        </div>
        <div className="stat flex flex-col">
          <div className="stat-title text-sm">Sales</div>
          <div className="stat-value text-secondary text-xl">2.6M</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
