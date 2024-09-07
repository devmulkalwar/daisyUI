import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const DeveloperCard = ({ developer }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-100 to-sky-200 shadow-lg rounded-lg hidden md:block md:w-1/2 lg:w-1/4 h-auto p-6 mx-auto md:mx-0 mt-6 md:mt-0">
      {/* Developer Photo */}
      <img
        src={developer.photo}
        alt="Developer Photo"
        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4"
      />

      {/* Developer Name */}
      <h2 className="text-xl font-semibold mb-2 text-center text-black">{developer.name}</h2>

      {/* Developer Details */}
      <p className="text-gray-700 text-center">{developer.role}</p>
      <p className="text-gray-600 text-sm mt-2 text-center">{developer.specialization}</p>

      {/* Contact Information */}
      <div className="text-center mt-4">
        <a href={`mailto:${developer.email}`} className="text-blue-500 hover:underline break-all">
          {developer.email}
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        {/* LinkedIn */}
        <a
          href={developer.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
          <FaLinkedin size={24} />
        </a>

        {/* GitHub */}
        <a
          href={developer.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-900 transition-colors duration-300">
          <FaGithub size={24} />
        </a>

        {/* Instagram */}
        <a
          href={developer.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-300">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default DeveloperCard;
