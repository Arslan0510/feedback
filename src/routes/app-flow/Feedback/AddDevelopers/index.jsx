import React from "react";
import { InputField } from "../../../../components";

const AddDevelopers = ({ developers, setDevelopers }) => {
  const handleButton = (e) => {
    e.preventDefault();
    setDevelopers([...developers, { name: "", email: "" }]);
  };

  return (
    <>
      {developers.map((el, i) => (
        <React.Fragment key={i}>
          <InputField
            className='wrap-input100 border-0 bg1 rs1-wrap-input100'
            handleChange={(e) => (el.name = e.target.value)}
            labelName={`Developer ${i ? i + 1 : ""} Name`}
            placeholder='Enter Developer Name'
            errors={el.nameError}
            touched={el.nameError}
            type='text'
            name='name'
            asterisk={true}
          />
          <InputField
            className='wrap-input100 border-0 validate-input bg1 rs1-wrap-input100'
            handleChange={(e) => (el.email = e.target.value)}
            labelName={`Developer ${i ? i + 1 : ""} Email`}
            placeholder='Enter Developer Email'
            errors={el.emailError}
            touched={el.emailError}
            type='email'
            name='email'
            asterisk={false}
          />
        </React.Fragment>
      ))}
      <div className='container-add-developer-form-btn'>
        <button className='add-developer-form-btn' onClick={handleButton}>
          <span>
            Add More Developers&nbsp;&nbsp;
            <i className='fa fa-plus m-l-7' aria-hidden='true'></i>
          </span>
        </button>
      </div>
    </>
  );
};

export default AddDevelopers;
