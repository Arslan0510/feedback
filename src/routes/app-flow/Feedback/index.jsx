import React, { useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { feedback } from "../../../store/actions";
import InputField from "../../../components/InputField";
import { validationSchema, additionalValidation } from "./validation.schema";
import "./feedback.css";
import AddDevelopers from "./AddDevelopers";

const Feedback = () => {
  const [developers, setDevelopers] = useState([{ name: "", email: "" }]);

  const handleSubmit = (values) => {
    if (additionalValidation(developers, setDevelopers)) return;
    console.log(
      "🚀 ~ file: index.jsx ~ line 16 ~ handleSubmit ~ values",
      { ...values, developers }
    );
    // feedback({
    //   data: values,
    //   cbSuccess: () => {
    //     toast.success("🦄 Feedback noted!", {
    //       position: "bottom-center",
    //       autoClose: 3000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   },
    //   cbFailure: (err) => {
    //     toast.error(err, {
    //       position: "bottom-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   },
    // });
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
                clientName: "",
                clientEmail: "",
                teamLeadName: "",
                teamLeadEmail: "",
                projectManagerName: "",
                projectManagerEmail: "",
                description: "",
              }}
              validationSchema={validationSchema}
              validate={() => additionalValidation(developers, setDevelopers)}
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

                  <AddDevelopers
                    developers={developers}
                    setDevelopers={setDevelopers} />

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
                  <InputField
                    className='wrap-input100 border-0 bg1 rs1-wrap-input100'
                    handleChange={handleChange("projectManagerName")}
                    errors={errors.teamLeadName}
                    touched={touched.teamLeadName}
                    labelName='Project Manager Name'
                    placeholder='Enter Project Manager Name'
                    type='text'
                    name='projectManagerName'
                    asterisk={true}
                  />
                  <InputField
                    className='wrap-input100 border-0 validate-input bg1 rs1-wrap-input100'
                    handleChange={handleChange("projectManagerEmail")}
                    errors={errors.teamLeadEmail}
                    touched={touched.teamLeadEmail}
                    labelName='Project Manager Email'
                    placeholder='Enter Project Manager Email'
                    type='email'
                    name='projectManagerEmail'
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
