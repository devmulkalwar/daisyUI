import React from "react";
import ProfileCard from "../Components/ProfileCard";
import ProductCard from "../Components/ProductCard";
import demodata from "../Components/DemoData/demodata";

const Profile = () => {
  return (
    <div className="bg-base-200 flex-grow">
      {/* profile picture and user description */}

      <ProfileCard />

      {/* products grid*/}
      <div className="divider"></div>

      <div className="grid gap-2 sm:md:lg:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4">
        {demodata.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            username={product.username}
            country={product.country}
            time={product.time}
            date={product.date}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
