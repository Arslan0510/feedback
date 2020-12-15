import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { feedback } from "../../../store/actions";
import "./feedback.css";

const validationSchema = Yup.object().shape({
  projectName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .label("Project Name"),
  developerName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .label("Developer Name"),
  developerEmail: Yup.string().email().label("Email"),
  clientName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .label("Client Name"),
  clientEmail: Yup.string().email().label("Email"),
  teamLeadName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .label("Team Lead Name"),
  teamLeadEmail: Yup.string().email().label("Email"),
  description: Yup.string(),
});

const index = () => {
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
    <div class='content-container'>
      <div class='container-fluid'>
        <h1>Feedback</h1>
        <div class='container-contact100'>
          <div class='wrap-contact100'>
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
              //   validate={(values) => handleValidate(values)}
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
                /* and other goodies */
              }) => (
                <form
                  class='contact100-form validate-form'
                  onSubmit={handleSubmit}>
                  <span class='contact100-form-title'>New Feedback</span>

                  <div
                    class='wrap-input100 validate-input bg1'
                    data-validate='Please Type Your Name'>
                    <span class='label-input100'>PROJECT NAME *</span>
                    <input
                      class='input100'
                      type='text'
                      name='projectName'
                      onChange={handleChange("projectName")}
                      placeholder='Enter Project Name'
                    />
                    <p style={{ color: "red" }}>
                      {errors.projectName &&
                        touched.projectName &&
                        errors.projectName}
                    </p>
                  </div>

                  <div class='wrap-input100 bg1 rs1-wrap-input100'>
                    <span class='label-input100'>Developer Name *</span>
                    <input
                      class='input100'
                      type='text'
                      name='developerName'
                      onChange={handleChange("developerName")}
                      placeholder='Enter Developer Name'
                    />
                    <p style={{ color: "red" }}>
                      {errors.developerName &&
                        touched.developerName &&
                        errors.developerName}
                    </p>
                  </div>

                  <div
                    class='wrap-input100 validate-input bg1 rs1-wrap-input100'
                    data-validate='Enter Your Email (e@a.x)'>
                    <span class='label-input100'>Developer Email</span>
                    <input
                      class='input100'
                      type='email'
                      name='developerEmail'
                      onChange={handleChange("developerEmail")}
                      placeholder='Enter Developer Email '
                    />
                    <p style={{ color: "red" }}>
                      {errors.developerEmail &&
                        touched.developerEmail &&
                        errors.developerEmail}
                    </p>
                  </div>

                  <div className='wrap-divider100'>
                    <hr className='divider'></hr>
                  </div>

                  <div class='wrap-input100 bg1 rs1-wrap-input100'>
                    <span class='label-input100'>Client Name *</span>
                    <input
                      class='input100'
                      type='text'
                      name='clientName'
                      onChange={handleChange("clientName")}
                      placeholder='Enter Client Name'
                    />
                    <p style={{ color: "red" }}>
                      {errors.clientName &&
                        touched.clientName &&
                        errors.clientName}
                    </p>
                  </div>

                  <div
                    class='wrap-input100 validate-input bg1 rs1-wrap-input100'
                    data-validate='Enter Your Email (e@a.x)'>
                    <span class='label-input100'>Client Email</span>
                    <input
                      class='input100'
                      type='email'
                      name='clientEmail'
                      onChange={handleChange("clientEmail")}
                      placeholder='Enter Client Email '
                    />
                    <p style={{ color: "red" }}>
                      {errors.clientEmail &&
                        touched.clientEmail &&
                        errors.clientEmail}
                    </p>
                  </div>

                  <div className='wrap-divider100'>
                    <hr className='divider'></hr>
                  </div>

                  <div class='wrap-input100 bg1 rs1-wrap-input100'>
                    <span class='label-input100'>Team Lead Name *</span>
                    <input
                      class='input100'
                      type='text'
                      name='teamLeadName'
                      onChange={handleChange("teamLeadName")}
                      placeholder='Enter Team Lead Name'
                    />
                    <p style={{ color: "red" }}>
                      {errors.teamLeadName &&
                        touched.teamLeadName &&
                        errors.teamLeadName}
                    </p>
                  </div>

                  <div
                    class='wrap-input100 validate-input bg1 rs1-wrap-input100'
                    data-validate='Enter Your Email (e@a.x)'>
                    <span class='label-input100'>Team Lead Email</span>
                    <input
                      class='input100'
                      type='email'
                      name='teamLeadEmail'
                      onChange={handleChange("teamLeadEmail")}
                      placeholder='Enter Team Lead Email '
                    />
                    <p style={{ color: "red" }}>
                      {errors.teamLeadEmail &&
                        touched.teamLeadEmail &&
                        errors.teamLeadEmail}
                    </p>
                  </div>

                  <div
                    class='wrap-input100 validate-input bg0 rs1-alert-validate'
                    data-validate='Please Type Your Message'>
                    <span class='label-input100'>
                      Project description (optional)
                    </span>
                    <textarea
                      class='input100'
                      name='description'
                      onChange={handleChange("description")}
                      placeholder='Your message here...'></textarea>
                    <p style={{ color: "red" }}>
                      {errors.description &&
                        touched.description &&
                        errors.description}
                    </p>
                  </div>

                  <div class='container-contact100-form-btn'>
                    <button class='contact100-form-btn' type='submit'>
                      <span>
                        Generate Project Feedback&nbsp;&nbsp;
                        <i
                          class='fa fa-long-arrow-right m-l-7'
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

export default index;
