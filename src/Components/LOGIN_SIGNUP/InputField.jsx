import React from "react";

const InputField = ({
  name,
  type,
  placeholder,
  icon: Icon,
  isRequired,
  value,
  onChange,
}) => {
  const iconClass =
    "absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500";
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{placeholder}</span>
      </label>
      <div className="relative">
        <input
          type={type}
          name={name} // Generate a valid name attribute
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={isRequired}
          className="input input-bordered w-full pl-10"
        />
        {<Icon className={iconClass} />}
      </div>
    </div>
  );
};

export default InputField;
