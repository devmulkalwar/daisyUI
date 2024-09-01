import React from 'react'
import SubmitButton from '../Components/OTP/SubmitButton'
import InputField from '../Components/LOGIN_SIGNUP/InputField'
import { AiOutlineLock } from 'react-icons/ai'

const ResetPassword = () => {
  return (
    <div className="flex flex-grow mx-3 md:mx-auto my-6 flex-col items-center justify-center ">
      <div className="flex flex-col w-full max-w-lg min-w-sm shadow-xl p-6 rounded-lg bg-base-300">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">Reset Password</h2>
        
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
        <div className="form-control lg:col-span-2 mt-6">
            <button className="btn btn-primary w-full">Reset Password</button>
          </div>
      </div>
    </div>
  )
}

export default ResetPassword