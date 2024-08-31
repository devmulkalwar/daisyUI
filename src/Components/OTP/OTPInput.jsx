import React, { useRef } from 'react';

const OTPInput = ({ otp, handleChange, handleKeyDown, handlePaste }) => {
  const inputRefs = useRef([]);

  return (
    <div className="flex justify-center space-x-2">
      {[...Array(6)].map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          ref={(el) => (inputRefs.current[index] = el)}
          className="input input-bordered w-12 h-12 text-center"
          value={otp[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index, inputRefs)}
          onPaste={(e) => handlePaste(e, inputRefs)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
