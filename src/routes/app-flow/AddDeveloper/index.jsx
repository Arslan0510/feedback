import React, { useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";

import { developer } from "../../../store/actions";
import { InputField, FormButton } from "../../../components";
import { validationSchema } from "./validation.schema";

const AddDeveloper = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    developer({
      data: values,
      cbSuccess: () => {
        toast.success("🦄 Feedback noted!");
        setLoading(false);
      },
      cbFailure: (err) => {
        toast.error(err);
        setLoading(false);
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
                developerName: "",
                developerEmail: "",
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
                  <span className='contact100-form-title'>New Developer</span>

                  <InputField
                    className='wrap-input100 border-0 validate-input bg1'
                    handleChange={handleChange("developerName")}
                    errors={errors.developerName}
                    touched={touched.developerName}
                    labelName='DEVELOPER NAME'
                    placeholder='Enter Developer Name'
                    type='text'
                    name='developerName'
                    asterisk={true}
                  />

                  <InputField
                    className='wrap-input100 border-0 validate-input bg1'
                    handleChange={handleChange("developerEmail")}
                    errors={errors.developerEmail}
                    touched={touched.developerEmail}
                    labelName='Developer Email'
                    placeholder='Enter Developer Email'
                    type='email'
                    name='developerEmail'
                    asterisk={true}
                  />

                  <FormButton loading={loading} text='Add Developer' />
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDeveloper;
