import React from 'react';

const Sidebar = ({ materials, onSelectMaterial, activeMaterial }) => {
  return (
    <aside
      className="h-full w-64 bg-base-200 text-white p-4 " // Adjust height and margin
    >
      <h2 className="text-xl font-semibold mb-4">Materials</h2>
      <ul>
        {materials.map((material, index) => (
          <li
            key={index}
            className={`p-2 cursor-pointer rounded ${
              activeMaterial.name === material.name ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
            onClick={() => onSelectMaterial(material)}>
            {material.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
