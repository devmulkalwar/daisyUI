import React from "react";
import ProfileCard from "../Components/ProfileCard";
import ProductCard from "../Components/ProductCard";

const Profile = () => {
  return (
    <div className="bg-base-200 flex-grow">
      {/* profile picture and user description */}
    
        <ProfileCard />
   
      {/* products grid*/}
      <div className="divider"></div>
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Profile;
