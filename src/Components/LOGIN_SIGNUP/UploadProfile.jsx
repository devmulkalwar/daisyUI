import React from 'react';
import { MdAddAPhoto } from 'react-icons/md'; // Ensure you import the icon component

const UploadProfile = ({ profilePic, handleProfilePicChange }) => {
  return (
    <div className="form-control lg:col-span-2 flex justify-center items-center">
      <div className="relative">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-gray-500">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile Preview"
                className="object-cover aspect-square w-full h-full"
              />
            ) : (
              <div className="flex justify-center items-center h-full text-gray-500">
                No Profile
              </div>
            )}
          </div>
        </div>

        {/* Plus Icon in Bottom Right Corner */}
        <div className="absolute bottom-0 right-0 bg-base-300 rounded-full p-1">
          <MdAddAPhoto className="text-2xl" />
        </div>

        {/* Invisible Input for File Selection */}
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept="image/*"
          onChange={handleProfilePicChange}
        />
      </div>
    </div>
  );
};

export default UploadProfile;
