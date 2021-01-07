import React from "react";
import { MoonLoader } from "react-spinners";

const FormButton = ({ loading, text }) => {
  return (
    <div className='container-contact100-form-btn'>
      <button className='contact100-form-btn' type='submit'>
        <span className='buttonLoader'>
          {text}&nbsp;&nbsp;
          {!loading ? (
            <i className='fa fa-long-arrow-right m-l-7' aria-hidden='true' />
          ) : (
            <MoonLoader color='#fff' size={18} loading />
          )}
        </span>
      </button>
    </div>
  );
};

export default FormButton;
