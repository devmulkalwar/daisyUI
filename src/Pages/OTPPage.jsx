import React, { useState } from "react";
import OTPInput from "../Components/OTP/OTPInput";
import SubmitButton from "../Components/SubmitButton";
import ResendOTP from "../Components/OTP/ResendOTP";

const OTPPage = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered
      if (value !== '' && index < 5) {
        e.target.nextElementSibling?.focus();
      }
    }
  };

  const handleKeyDown = (e, index, inputRefs) => {
    // Backspace handling
    if (e.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e, inputRefs) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6); // Take a max of 6 digits
    const digits = pastedData.split('').filter((char) => /^\d$/.test(char)); // Extract digits only

    const newOtp = [...otp];
    digits.forEach((digit, idx) => {
      if (idx < 6) {
        newOtp[idx] = digit;
        inputRefs.current[idx].value = digit;
      }
    });
    setOtp(newOtp);

    // Move focus to the next input after the last pasted digit
    const nextIndex = digits.length;
    if (nextIndex < 6) {
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const handleSubmit = () => {
    // Logic to verify OTP
    console.log(otp.join(''));
  };

  const handleResend = () => {
    // Logic to resend OTP
    console.log('Resending OTP...');
  };

  return (
    <div className="flex flex-grow flex-col items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-lg bg-base-100 p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Verify OTP</h2>
        <OTPInput
          otp={otp}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          handlePaste={handlePaste}
        />
        <SubmitButton handleSubmit={handleSubmit} />
        <ResendOTP handleResend={handleResend} />
      </div>
    </div>
  );
};

export default OTPPage;
