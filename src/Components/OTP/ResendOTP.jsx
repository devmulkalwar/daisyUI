import React, { useState, useEffect } from 'react';

const ResendOTP = ({ handleResend }) => {
  const [counter, setCounter] = useState(30); // Countdown duration in seconds
  const [isDisabled, setIsDisabled] = useState(true);

  // Start the countdown on component mount or when counter is reset
  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      return () => clearInterval(timer); // Clean up the timer on component unmount
    } else {
      setIsDisabled(false); // Enable the button when the countdown reaches zero
    }
  }, [counter]);

  const handleClick = () => {
    handleResend();
    setCounter(30); // Reset the countdown after resend
    setIsDisabled(true); // Disable the button
  };

  return (
    <div className="text-center mt-4">
      <button
        className={`link link-primary ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleClick}
        disabled={isDisabled}
      >
        Resend OTP {isDisabled && `(${counter}s)`}
      </button>
    </div>
  );
};

export default ResendOTP;
