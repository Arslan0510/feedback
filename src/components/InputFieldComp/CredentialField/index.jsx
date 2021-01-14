import React from "react";

const CredentialField = ({
  autoFocus,
  handleChange,
  label,
  name,
  placeholder,
  type,
  value,
}) => {
  return (
    <div className='form-label-group'>
      <label htmlFor='inputName'>{label}</label>
      <input
        autoFocus={autoFocus && true}
        className='form-control'
        id='inputName'
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        name={name}
        required
        type={type}
        value={value}
      />
    </div>
  );
};

export default CredentialField;
