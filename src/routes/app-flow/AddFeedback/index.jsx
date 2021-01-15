import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";

import AddDevelopers from "./AddDevelopers";
import { feedback, allDevelopers, getTeamLead } from "../../../store/actions";
import { Dropdown, InputField, FormButton, Layout } from "../../../components";
import { validationSchema, additionalValidation } from "./validation.schema";
import {
  developerNames,
  teamLeadName,
  techStackArray,
  removeEmptyStrings,
} from "../../../services";
import SweetAlert from "react-bootstrap-sweetalert";

import "./feedback.css";

const AddFeedback = () => {
  const [state, setState] = useState({ developers: [], teamLeads: [] });
  const [developers, setDevelopers] = useState([]);
  const [teamLead, setTeamLead] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [formikValues, setFormikValues] = useState();

  useEffect(() => {
    setLoading(true);
    allDevelopers({
      cbSuccess: (developers, teamLeads) => {
        setState({
          ...state,
          developers: developerNames(developers),
          teamLeads: teamLeadName(teamLeads),
        });

        setLoading(false);
      },
      cbFailure: (err) => {
        toast.error(err);
        setLoading(false);
      },
    });
  }, []);

  const _submitFeedback = (values) => {
    // setFormikValues(values);
    feedback({
      data: removeEmptyStrings({ ...values, developers }),
      cbSuccess: () => {
        toast.success("🦄 Feedback noted!");
        setLoading(false);
      },
      cbFailure: (err, duplicate) => {
        if (duplicate === "LIKE_PROJECT") {
          getThisDone();
          setLoading(false);
        } else {
          toast.error(err);
          setLoading(false);
        }
      },
    });
  };

  const handleSubmit = (values) => {
    setLoading(true);
    feedback({
      data: removeEmptyStrings({ ...values, developers, teamLead }),
      cbSuccess: () => {
        toast.success("🦄 Feedback noted!");
        setLoading(false);
      },
      cbFailure: (err, duplicate) => {
        if (duplicate === "LIKE_PROJECT") {
          getThisDone();
          setLoading(false);
        } else {
          toast.error(err);
          setLoading(false);
        }
      },
    });
  };

  const getThisDone = () => {
    const getAlert = () => (
      <SweetAlert
        warning
        showCancel
        confirmBtnText='Yes, update it!'
        confirmBtnBsStyle='danger'
        title='Feedback is Already given before, want to update it?'
        onConfirm={onConfirm}
        onCancel={() => setAlert(null)}
        focusCancelBtn>
        Feedback already given before!
      </SweetAlert>
    );
    setAlert(getAlert());
  };

  const onConfirm = () => {
    _submitFeedback(formikValues, true);
    setAlert(null);
  };

  const handleDropdown = (options, title) => {
    if (title === "dev") {
      setDevelopers(options);
    } else if (title === "teamLead") setTeamLead(options.value);
  };

  return (
    <Layout title='Feedback'>
      {alert}
      <div className='container-contact100'>
        <div className='wrap-contact100'>
          <Formik
            initialValues={{
              projectName: "",
              clientName: "",
              clientEmail: "",
              projectManagerName: "",
              projectManagerEmail: "",
              projectDescription: "",
            }}
            validationSchema={validationSchema}
            // validate={() => additionalValidation(developers, setDevelopers)}
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

                {/* <AddDevelopers
                  developers={developers}
                  setDevelopers={setDevelopers}
                /> */}

                <Dropdown
                  dName='dev'
                  handleChange={handleDropdown}
                  multiSelect={true}
                  options={state.developers}
                  title='Select Developer'
                />
                <Dropdown
                  dName='teamLead'
                  handleChange={handleDropdown}
                  multiSelect={false}
                  options={state.teamLeads}
                  title='Select Team Lead'
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

                {/* <InputField
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
                /> */}

                <InputField
                  className='wrap-input100 border-0 bg1 rs1-wrap-input100'
                  handleChange={handleChange("projectManagerName")}
                  errors={errors.projectManagerName}
                  touched={touched.projectManagerName}
                  labelName='Project Manager Name'
                  placeholder='Enter Project Manager Name'
                  type='text'
                  name='projectManagerName'
                  asterisk={true}
                />

                <InputField
                  className='wrap-input100 border-0 validate-input bg1 rs1-wrap-input100'
                  handleChange={handleChange("projectManagerEmail")}
                  errors={errors.projectManagerEmail}
                  touched={touched.projectManagerEmail}
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
                    name='projectDescription'
                    onChange={handleChange("projectDescription")}
                    placeholder='Your message here...'></textarea>
                  <p style={{ color: "red" }}>
                    {errors.description &&
                      touched.description &&
                      errors.description}
                  </p>
                </div>

                <FormButton
                  loading={loading}
                  text='Generate Project Feedback'
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default AddFeedback;
