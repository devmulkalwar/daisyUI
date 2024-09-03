import React from 'react';

const MaterialCard = ({ material }) => {
  return (
    <div className="p-4 bg-base-200 shadow rounded-lg h-60 w-48 flex flex-col justify-between overflow-hidden">
      <div>
        <h2 className="text-xl font-semibold mb-2 truncate">{material.name}</h2>
        <p className="text-gray-600 text-sm overflow-hidden text-ellipsis">
          {material.description}
        </p>
      </div>
    </div>
  );
};

export default MaterialCard;
