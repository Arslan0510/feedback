import React from "react";
import { Formik } from "formik";

import { feedback } from "../../../store/actions";
import InputField from "../../../components/InputField";
import { validationSchema } from "./validation.schema";
import "./feedback.css";

const Feedback = () => {
  const handleSubmit = (values) => {
    feedback({
      data: values,
      cbSuccess: () => {},
      cbFailure: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <div className='content-container'>
      <div className='container-fluid'>
        <h1>Feedback</h1>
        <div className='container-contact100'>
          <div className='wrap-contact100'>
            <Formik
              initialValues={{
                projectName: "",
                developerName: "",
                developerEmail: "",
                clientName: "",
                clientEmail: "",
                teamLeadName: "",
                teamLeadEmail: "",
                description: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => handleSubmit(values)}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form
                  className='contact100-form validate-form'
                  onSubmit={handleSubmit}>
                  <span className='contact100-form-title'>New Feedback</span>

                  <InputField
                    className='wrap-input100 border-0 validate-input bg1'
                    handleChange={handleChange("projectName")}
                    errors={errors.projectName}
                    touched={touched.projectName}
                    labelName='PROJECT NAME'
                    placeholder='Enter Project Name'
                    type='text'
                    name='projectName'
                    asterisk={true}
                  />
                  <InputField
                    className='wrap-input100 border-0 bg1 rs1-wrap-input100'
                    handleChange={handleChange("developerName")}
                    errors={errors.developerName}
                    touched={touched.developerName}
                    labelName='Developer Name'
                    placeholder='Enter Developer Name'
                    type='text'
                    name='developerName'
                    asterisk={true}
                  />
                  <InputField
                    className='wrap-input100 border-0 validate-input bg1 rs1-wrap-input100'
                    handleChange={handleChange("developerEmail")}
                    errors={errors.developerEmail}
                    touched={touched.developerEmail}
                    labelName='Developer Email'
                    placeholder='Enter Developer Email'
                    type='email'
                    name='developerEmail'
                    asterisk={false}
                  />
                  <InputField
                    className='wrap-input100 border-0 bg1 rs1-wrap-input100'
                    handleChange={handleChange("clientName")}
                    errors={errors.clientName}
                    touched={touched.clientName}
                    labelName='Client Name'
                    placeholder='Enter Client Name'
                    type='text'
                    name='clientName'
                    asterisk={true}
                  />
                  <InputField
                    className='wrap-input100 border-0 validate-input bg1 rs1-wrap-input100'
                    handleChange={handleChange("clientEmail")}
                    errors={errors.clientEmail}
                    touched={touched.clientEmail}
                    labelName='Client Email'
                    placeholder='Enter Client Email'
                    type='email'
                    name='clientEmail'
                    asterisk={true}
                  />
                  <InputField
                    className='wrap-input100 border-0 bg1 rs1-wrap-input100'
                    handleChange={handleChange("teamLeadName")}
                    errors={errors.teamLeadName}
                    touched={touched.teamLeadName}
                    labelName='Team Lead Name'
                    placeholder='Enter Team Lead Name'
                    type='text'
                    name='teamLeadName'
                    asterisk={true}
                  />
                  <InputField
                    className='wrap-input100 border-0 validate-input bg1 rs1-wrap-input100'
                    handleChange={handleChange("teamLeadEmail")}
                    errors={errors.teamLeadEmail}
                    touched={touched.teamLeadEmail}
                    labelName='Team Lead Email'
                    placeholder='Enter Team Lead Email'
                    type='email'
                    name='teamLeadEmail'
                    asterisk={false}
                  />
                  <div
                    className='wrap-input100 validate-input bg0 rs1-alert-validate'
                    data-validate='Please Type Your Message'>
                    <span className='label-input100'>
                      Project description (optional)
                    </span>
                    <textarea
                      className='input100'
                      name='description'
                      onChange={handleChange("description")}
                      placeholder='Your message here...'></textarea>
                    <p style={{ color: "red" }}>
                      {errors.description &&
                        touched.description &&
                        errors.description}
                    </p>
                  </div>

                  <div className='container-contact100-form-btn'>
                    <button className='contact100-form-btn' type='submit'>
                      <span>
                        Generate Project Feedback&nbsp;&nbsp;
                        <i
                          className='fa fa-long-arrow-right m-l-7'
                          aria-hidden='true'></i>
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
