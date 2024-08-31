import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineHome,
} from 'react-icons/ai'; 

import InputField from "./InputField";
import UploadProfile from "./UploadProfile";

const EditModal = () => {
  const [role, setRole] = useState("Kabadiwala");
  const [profilePic, setProfilePic] = useState(null);

  const handleRoleToggle = () => {
    setRole((prevRole) =>
      prevRole === "Kabadiwala" ? "Scrap Dealer" : "Kabadiwala"
    );
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      // Reset to "No Profile" if no file is selected
      setProfilePic(null);
    }
  };

  return (
    <div className="card modal-box bg-base-300 w-full max-w-md shrink-0 shadow-2xl">
      <form className="card-body flex flex-col gap-4">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        {/* Profile Picture Selector */}
        <UploadProfile profilePic={profilePic} handleProfilePicChange={handleProfilePicChange} />

        {/* Name */}
        <InputField
          name="Name"
          type="Text"
          placeholder="Name"
          icon={AiOutlineUser}
          isRequired={false}
        />

        {/* Mobile Number */}
        <InputField
          name="Mobile Number"
          type="tel"
          placeholder="Mobile Number"
          icon={AiOutlinePhone}
          isRequired={false}
        />

        {/* Address */}
        <InputField
          name="Address"
          type="text"
          placeholder="Address"
          icon={AiOutlineHome}
          isRequired={false}
        />

        {/* Sign Up Button */}
        <div className="form-control lg:col-span-2 mt-6">
          <button className="btn btn-primary w-full">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
