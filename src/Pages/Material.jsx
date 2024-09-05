import React, { useState } from 'react';
import Sidebar from '../Components/Materials/Sidebar';
import MaterialCard from '../Components/Materials/MaterialCard';
import SideMenu from '../Components/Materials/SideMenu';
import {materials} from './dummydata'


const Material = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 h-full bg-gray-800 text-white p-4 overflow-y-auto">
        <SideMenu
          materials={materials}
          onSelectMaterial={setSelectedMaterial}
          activeMaterial={selectedMaterial}
        />
      </div>

      <div className="flex flex-col flex-1">
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {/* Multiple Material Cards */}
            {materials.map((material, index) => (
              <MaterialCard key={index} material={material} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Material;
