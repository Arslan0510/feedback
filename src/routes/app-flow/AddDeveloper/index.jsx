import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";

import {
  addDeveloper,
  getTeamLead,
  getTechStack,
} from "../../../store/actions";
import {
  Dropdown,
  FormButton,
  ImageInput,
  InputField,
  Layout,
} from "../../../components";
import { validationSchema } from "./validation.schema";
import { techStackRename } from "../../../services";
import "./addDeveloper.css";

const AddDeveloper = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    developerImage: undefined,
    designation: "",
    teamLead: "",
    techStack: [],
  });
  const [teamLead, setTeamLead] = useState([]);
  const [techStack, setTechStack] = useState([]);

  const handleSubmit = (values) => {
    setLoading(true);
    let data = { ...values, ...state };
    addDeveloper({
      data: data,
      cbSuccess: () => {
        toast.success("🦄 Developer added!");
        setLoading(false);
      },
      cbFailure: (err) => {
        toast.error(err);
        setLoading(false);
      },
    });
  };

  useEffect(() => {
    setLoading(true);
    getTeamLead({
      cbSuccess: (data) => {
        setTeamLead(data);
        setLoading(false);
      },
      cbFailure: (err) => {
        toast.error(err);
        setLoading(false);
      },
    });
    getTechStack({
      cbSuccess: (data) => {
        setTechStack(data);
        setLoading(false);
      },
      cbFailure: (err) => {
        toast.error(err);
        setLoading(false);
      },
    });
  }, []);

  const options = [
    { value: "JUNIOR_DEVELOPER", label: "JUNIOR DEVELOPER" },
    { value: "MID_LEVEL_DEVELOPER", label: "MID LEVEL DEVELOPER" },
    { value: "SENIOR_DEVELOPER", label: "SENIOR DEVELOPER" },
    { value: "TEAM_LEAD", label: "TEAM LEAD" },
  ];

  const handleDropdown = (options, title) => {
    console.log(
      "🚀 ~ file: index.jsx ~ line 81 ~ handleDropdown ~ options",
      options
    );
    if (title === "des") {
      if (options.value === "TEAM_LEAD") setDisabled(true);
      else setDisabled(false);
      setState({ ...state, designation: options.value });
    } else if (title === "teamLead")
      setState({ ...state, teamLead: options.value });
    else if (title === "techStack") {
      setState({ ...state, techStack: options.map((option) => option.id) });
    }
  };

  const getPhoto = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log("🚀 ~ file: index.jsx ~ line 96 ~ getPhoto ~ file", file);
    var regex = new RegExp(
      "([a-zA-Z0-9s_\\.-:])+(.jpg|.JPG|.png|.PNG|.gif|.jpeg|.svg)$"
    );
    if (regex.test(file.name)) {
      reader.onloadend = () => {
        var image = new Image();
        image.src = reader.result;
        image.onload = () => {
          // if (image.width <= 400 && image.height <= 120) {
          setState({ ...state, developerImage: file });
          // }
        };
      };
      reader.readAsDataURL(file);
    } else {
      alert("Wrong file extension...");
    }
  };

  return (
    <Layout title='Add New Developer'>
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

                <ImageInput getPhoto={getPhoto} image={state.developerImage} />

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

                <FormButton loading={loading} text='Add Developer' />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default AddDeveloper;
