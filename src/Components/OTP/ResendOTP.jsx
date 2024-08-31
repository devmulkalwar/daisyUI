import React, { useState, useEffect } from "react";

const ResendOTP = ({ handleResend }) => {
  const [counter, setCounter] = useState(30); // Countdown duration in seconds (5 minutes)
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
    setCounter(300); // Reset the countdown to 5 minutes after resend
    setIsDisabled(true); // Disable the button
  };

  // Format the counter as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="text-center mt-4">
      {isDisabled ? (
        <div className="text-gray-600">
          <span className="block mb-2">
            If you didn’t receive the OTP, please wait for{" "}
            <span className="font-semibold">{formatTime(counter)}</span>
          </span>
          <button
            className="btn btn-primary btn-disabled opacity-50 cursor-not-allowed"
            disabled
          >
            Resend OTP
          </button>
        </div>
      ) : (
        <button
          className="btn btn-primary"
          onClick={handleClick}
        >
          Resend OTP
        </button>
      )}
    </div>
  );
};

export default ResendOTP;
