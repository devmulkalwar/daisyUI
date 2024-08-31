import React, { useState } from 'react';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'; // Lock and Mail icons
import { Link } from 'react-router-dom';
import InputField from '../Components/LOGIN_SIGNUP/InputField';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex justify-evenly mx-8 my-8 gap-6 items-center flex-col lg:flex-row-reverse flex-grow">
      <div className="text-center lg:text-left max-w-4xl">
        <h1 className="text-4xl lg:text-6xl font-bold">Welcome Back!</h1>
        <p className="hidden lg:block mt-2 text-xl py-6">
          Junktion is a waste management platform designed to streamline the process of buying and
          selling scrap materials. Login to continue managing your waste and contributing to a
          sustainable future.
        </p>
        <p className="mt-2 text-md lg:text-xl">
          Don't have an account yet?
          <a href="/signup" className="text-md font-semibold text-primary">
            {' '}
            Sign Up
          </a>
        </p>
      </div>

      <div className="card w-full max-w-2xl shrink-0 shadow-2xl bg-base-300">
        <form className="card-body grid grid-cols-1 gap-4">
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

          {/* Forgot Password Link */}
          <div className="form-control">
            <Link href="/forgot-password" className="text-sm text-primary text-right">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
