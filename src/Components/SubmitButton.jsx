import React from 'react';

const SubmitButton = ({ handleSubmit , btnText}) => {
  return (
    <button className="btn btn-primary w-full mt-6" onClick={handleSubmit}>
      {btnText}
    </button>
  );
};

export default SubmitButton;
