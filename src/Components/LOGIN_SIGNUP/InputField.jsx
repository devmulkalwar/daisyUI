import React from 'react';

const InputField = ({ name, type, placeholder, icon: Icon, isRequired }) => {
  let iconClass = 'absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500';  
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{name}</span>
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full pl-10"
          required={isRequired}
        />
        {<Icon className={iconClass}/>}
      </div>
    </div>
  );
};

export default InputField;