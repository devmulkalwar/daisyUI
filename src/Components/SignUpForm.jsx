import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineSync } from "react-icons/ai"; // Plus and Loop icons
import { MdAddAPhoto } from "react-icons/md";

const SignUpForm = () => {
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
    <div className="card modal-box bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
    <form className="card-body grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Profile Picture Selector */}
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
          <div className="absolute bottom-0 right-0 bg-transparent rounded-full p-1">
            <MdAddAPhoto className="text-2xl text-gray-500" />
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

      {/* Role Toggle */}
      <div className="form-control lg:col-span-2 flex justify-center items-center">
        <button
          type="button"
          onClick={handleRoleToggle}
          className={`btn btn-outline ${
            role === "Kabadiwala" ? "btn-primary" : "btn-success"
          }`}
        >
          {role === "Kabadiwala" ? "Kabadiwala" : "Scrap Dealer"}
          <AiOutlineSync
            className={`text-xl ${
              role === "Kabadiwala" ? "text-primary" : "text-success"
            } `}
          />
        </button>
      </div>

      {/* Email */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>

      {/* Mobile Number */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Mobile Number</span>
        </label>
        <input
          type="tel"
          placeholder="mobile number"
          className="input input-bordered"
          required
        />
      </div>

      {/* Password */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          required
        />
      </div>

      {/* Confirm Password */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Confirm Password</span>
        </label>
        <input
          type="password"
          placeholder="confirm password"
          className="input input-bordered"
          required
        />
      </div>

      {/* Address */}
      <div className="form-control lg:col-span-2">
        <label className="label">
          <span className="label-text">Address</span>
        </label>
        <input
          type="text"
          placeholder="address"
          className="input input-bordered"
          required
        />
      </div>

      {/* Sign Up Button */}
      <div className="form-control lg:col-span-2 mt-6">
        <button className="btn btn-primary w-full">Sign Up</button>
      </div>
    </form>
  </div>
  )
}

export default SignUpForm