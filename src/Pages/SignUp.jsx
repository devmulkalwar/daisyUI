import React, { useState } from 'react';
import {
  AiOutlinePlus,
  AiOutlineSync,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineHome,
} from 'react-icons/ai'; // Plus, Loop, Mail, Lock, User, Phone, and Home icons
import { MdAddAPhoto } from 'react-icons/md';

const SignUp = () => {
  const [role, setRole] = useState('Kabadiwala');
  const [profilePic, setProfilePic] = useState(null);

  const handleRoleToggle = () => {
    setRole((prevRole) => (prevRole === 'Kabadiwala' ? 'Scrap Dealer' : 'Kabadiwala'));
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
    <div className="flex justify-evenly mx-8 my-8 gap-6 items-center flex-col lg:flex-row-reverse flex-grow">
      <div className="text-center lg:text-left max-w-4xl">
        <h1 className="text-4xl lg:text-6xl font-bold">Register now!</h1>
        <p className="hidden lg:block mt-2 text-xl py-6">
          Junktion is a waste management platform designed to streamline the process of buying and
          selling scrap materials. The platform connects Scrap Dealer with Kabadiwala, facilitating
          efficient transactions and promoting sustainable waste management practices.
        </p>
        <p className="mt-2 text-md lg:text-xl">
          Already have an account?
          <a href="/login" className="text-md font-semibold text-primary">
            {' '}
            Login
          </a>
        </p>
      </div>

      <div className="card w-full max-w-2xl shrink-0 shadow-2xl bg-base-300">
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

          {/* Role Toggle */}
          <div className="form-control lg:col-span-2 flex justify-center items-center">
            <button
              type="button"
              onClick={handleRoleToggle}
              className={`btn btn-outline ${
                role === 'Kabadiwala' ? 'btn-primary' : 'btn-success'
              }`}>
              {role === 'Kabadiwala' ? 'Kabadiwala' : 'Scrap Dealer'}
              <AiOutlineSync
                className={`text-xl ${role === 'Kabadiwala' ? 'text-primary' : 'text-success'} `}
              />
            </button>
          </div>

          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <div className="relative">
              <input
                type="name"
                placeholder="Name"
                className="input input-bordered w-full pl-10"
                required
              />
              <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full pl-10"
                required
              />
              <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full pl-10"
                required
              />
              <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered w-full pl-10"
                required
              />
              <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                placeholder="Mobile number"
                className="input input-bordered w-full pl-10"
                required
              />
              <AiOutlinePhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
          </div>

          {/* Address */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full pl-10"
                required
              />
              <AiOutlineHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="form-control lg:col-span-2 mt-6">
            <button className="btn btn-primary w-full">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
