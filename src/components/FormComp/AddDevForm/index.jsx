import React from "react";
import ImageInput from "../../InputFieldComp/ImageInput";
import InputField from "../../InputFieldComp/InputField";
import Dropdown from "../../OtherComp/Dropdown";
import FormButton from "../../ButtonComp/FormButton";
import {getPhoto, options} from "./helper-methods";

const AddDevForm = ({
  disabled,
  errors,
  handleChange,
  handleDropdown,
  handleSubmit,
  title,
  state,
  setImageUri,
  setState,
  techStack,
  touched,
  teamLead,
  values,
  imageUri,
}) => {
  return (
    <form className='contact100-form validate-form' onSubmit={handleSubmit}>
      <span className='contact100-form-title'>{title}</span>

      <InputField
        asterisk={true}
        className='wrap-input100 border-0 bg1 rs1-wrap-input100'
        errors={errors.developerName}
        handleChange={handleChange("developerName")}
        labelName='Name'
        name='developerName'
        placeholder='Enter Developer Name'
        touched={touched.developerName}
        type='text'
        value={values.developerName}
      />

      <ImageInput
        getPhoto={getPhoto({state, setImageUri, setState})}
        image={imageUri}
      />

      <InputField
        asterisk={true}
        className='wrap-input100 border-0 validate-input bg1 rs1-wrap-input100'
        errors={errors.developerEmail}
        handleChange={handleChange("developerEmail")}
        labelName='Email'
        name='developerEmail'
        placeholder='e.g. email@address.com'
        touched={touched.developerEmail}
        type='email'
        value={values.developerEmail}
      />

      <Dropdown
        dName='des'
        multiSelect={false}
        handleChange={handleDropdown}
        options={options}
        title='Select Designation'
      />

      <Dropdown
        dName='teamLead'
        disable={disabled}
        multiSelect={false}
        handleChange={handleDropdown}
        options={teamLead}
        title='Select Team Lead'
      />

      <Dropdown
        dName='techStack'
        multiSelect={true}
        handleChange={handleDropdown}
        options={techStack}
        title='Select Tech Stack'
      />

      <FormButton text='Add Developer' />
    </form>
  );
};

export default AddDevForm;
