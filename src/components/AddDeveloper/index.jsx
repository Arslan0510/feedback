import React, { useState } from "react";

const AddDeveloper = ({ errors, touched, count }) => {
  const [developers, setDevelopers] = useState([{ email: "", name: "" }]);
  const onChange = (e, count) => {
    // console.log(
    //   "🚀 ~ file: index.jsx ~ line 53 ~ onChange ~ name",
    //   e.target.name
    // );
    // console.log(
    //   "🚀 ~ file: index.jsx ~ line 53 ~ onChange ~ value",
    //   e.target.value
    // );
    let values = [...developers];
    values["name"] = e.target.value;
    values["email"] = e.target.value;
    console.log("🚀 ~ file: index.jsx ~ line 15 ~ onChange ~ values", values);
  };
  return (
    <>
      <div className='wrap-input100 border-0 bg1 rs1-wrap-input100'>
        <span className='label-input100'>Developer Name {count} *</span>
        <input
          className='input100'
          type='text'
          name={`developerName${count}`}
          onChange={(e) => onChange(e, count)}
          placeholder='Enter Developer Name'
        />
        {/* <p style={{ color: "red" }}>{errors && touched && errors}</p> */}
      </div>
      <div className='wrap-input100 border-0 validate-input bg1 rs1-wrap-input100'>
        <span className='label-input100'>Developer Email {count} *</span>
        <input
          className='input100'
          type='email'
          name={`developerEmail${count}`}
          onChange={onChange}
          placeholder='Enter Developer Email'
        />
        {/* <p style={{ color: "red" }}>{errors && touched && errors}</p> */}
      </div>
    </>
  );
};

export default AddDeveloper;
