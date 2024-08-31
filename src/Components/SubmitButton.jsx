import React from 'react';

const SubmitButton = ({ handleSubmit }) => {
  return (
    <button className="btn btn-primary w-full mt-6" onClick={handleSubmit}>
      Verify OTP
    </button>
  );
};

export default SubmitButton;
