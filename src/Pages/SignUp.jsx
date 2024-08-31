import React, { useState } from 'react';
import {
  AiOutlineSync,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineHome,
} from 'react-icons/ai'; // Plus, Loop, Mail, Lock, User, Phone, and Home icons
import { MdAddAPhoto } from 'react-icons/md';
import RoleToggle from '../Components/LOGIN_SIGNUP/RoleToggle';
import UploadProfile from '../Components/LOGIN_SIGNUP/UploadProfile';
import InputField from '../Components/LOGIN_SIGNUP/InputField';
import { Link } from 'react-router-dom';

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
          <Link to="/login" className="text-md font-semibold text-primary">
            {' '}
            Login
          </Link>
        </p>
      </div>

      <div className="card w-full max-w-2xl shrink-0 shadow-2xl bg-base-300">
        <form className="card-body grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Profile Picture Selector */}
          <UploadProfile profilePic={profilePic} handleProfilePicChange={handleProfilePicChange} />

          {/* Role Toggle button */}
          <RoleToggle handleRoleToggle={handleRoleToggle} role={role} />

          {/* Name */}
          <InputField
            name="Name"
            type="Text"
            placeholder="Name"
            icon={AiOutlineUser}
            isRequired={true}
          />
          
          {/* Email */}
          <InputField
            name="Email"
            type="email"
            placeholder="Email"
            icon={AiOutlineMail}
            isRequired={true}
          />

          {/* Password */}
          <InputField
            name="Password"
            type="password"
            placeholder="Password"
            icon={AiOutlineLock}
            isRequired={true}
          />

          {/* Confirm Password */}
          <InputField
            name="Confirm Password"
            type="password"
            placeholder="Confirm password"
            icon={AiOutlineLock}
            isRequired={true}
          />

          {/* Mobile Number */}
          <InputField
            name="Mobile Number"
            type="tel"
            placeholder="Mobile Number"
            icon={AiOutlinePhone}
            isRequired={true}
          />

          {/* Address */}
          <InputField
            name="Address"
            type="text"
            placeholder="Address"
            icon={AiOutlineHome}
            isRequired={true}
          />

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