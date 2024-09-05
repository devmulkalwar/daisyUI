import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineHome,
} from "react-icons/ai"; // Mail, Lock, User, Phone, and Home icons
import RoleToggle from "../Components/LOGIN_SIGNUP/RoleToggle";
import UploadProfile from "../Components/LOGIN_SIGNUP/UploadProfile";
import InputField from "../Components/LOGIN_SIGNUP/InputField";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [role, setRole] = useState("Kabadiwala");
  const [profilePic, setProfilePic] = useState(null);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Scrap Dealer",
    mobile: "",
    address: "",
    profileImage: null,
  });
  const [uploading, setUploading] = useState(false);

  const handleRoleToggle = () => {
    const newRole = role === "Kabadiwala" ? "Scrap Dealer" : "Kabadiwala";
    setRole(newRole);
    setSignUpData({ ...signUpData, role: newRole });
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setSignUpData({ ...signUpData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      setProfilePic(null);
      setSignUpData({ ...signUpData, profileImage: null });
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
   
      console.log("signUpData with profileImage", signUpData);
      alert("Successfully signed up");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Check console for details.");
    }
  };

  return (
    <div className="flex justify-evenly m-5 lg:m-8 gap-6 items-center flex-col lg:flex-row-reverse flex-grow">
      <div className="text-center lg:text-left max-w-4xl">
        <h1 className="text-4xl lg:text-6xl font-bold">Register now!</h1>
        <p className="hidden lg:block mt-2 text-xl py-6">
          Junktion is a waste management platform designed to streamline the
          process of buying and selling scrap materials. The platform connects
          Scrap Dealer with Kabadiwala, facilitating efficient transactions and
          promoting sustainable waste management practices.
        </p>
        <p className="mt-2 text-md lg:text-xl">
          Already have an account?
          <Link to="/login" className="text-md font-semibold text-primary">

            Login
          </Link>
        </p>
      </div>

      <div className="card w-full max-w-2xl shrink-0 shadow-2xl bg-base-300">
        <form
          onSubmit={handleSubmit}
          className="card-body grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {/* Profile Picture Selector */}
          <UploadProfile
            profilePic={profilePic}
            handleProfilePicChange={handleProfilePicChange}
          />

          {/* Role Toggle button */}
          <RoleToggle handleRoleToggle={handleRoleToggle} role={role} />

          {/* Name */}
          <InputField
            name="name"
            type="text"
            value={signUpData.name}
            onChange={onInputChange}
            placeholder="Name"
            icon={AiOutlineUser}
            isRequired={true}
          />

          {/* Email */}
          <InputField
            name="email"
            type="email"
            value={signUpData.email}
            onChange={onInputChange}
            placeholder="Email"
            icon={AiOutlineMail}
            isRequired={true}
          />

          {/* Password */}
          <InputField
            name="password"
            type="password"
            value={signUpData.password}
            onChange={onInputChange}
            placeholder="Password"
            icon={AiOutlineLock}
            isRequired={true}
          />

          {/* Confirm Password */}
          <InputField
            name="confirmPassword"
            type="password"
            value={signUpData.confirmPassword}
            onChange={onInputChange}
            placeholder="Confirm Password"
            icon={AiOutlineLock}
            isRequired={true}
          />

          {/* Mobile Number */}
          <InputField
            name="mobile"
            type="tel"
            value={signUpData.mobile}
            onChange={onInputChange}
            placeholder="Mobile Number"
            icon={AiOutlinePhone}
            isRequired={true}
          />

          {/* Address */}
          <InputField
            name="address"
            type="text"
            value={signUpData.address}
            onChange={onInputChange}
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
