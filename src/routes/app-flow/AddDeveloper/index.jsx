import React, {useEffect, useState} from "react";
import {Formik} from "formik";
import {toast} from "react-toastify";
import {addDeveloper, getTeamLead, getTechStack} from "../../../store/actions";
import {AddDevForm, Layout, Loader} from "../../../components";
import {validationSchema} from "./validation.schema";
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
  const [imageUri, setImageUri] = useState("");

  const handleSubmit = (values) => {
    setLoading(true);
    let data = {...values, ...state};
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

  const handleDropdown = (options, title) => {
    if (title === "des") {
      if (options.value === "TEAM_LEAD") setDisabled(true);
      else setDisabled(false);
      setState({...state, designation: options.value});
    } else if (title === "teamLead")
      setState({...state, teamLead: options.value});
    else if (title === "techStack") {
      setState({...state, techStack: options.map((option) => option.id)});
    }
  };

  if (loading) return <Loader />;

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
            {({values, errors, touched, handleChange, handleSubmit}) => (
              <AddDevForm
                disabled={disabled}
                errors={errors}
                handleChange={handleChange}
                handleDropdown={handleDropdown}
                handleSubmit={handleSubmit}
                title='Add New Developer'
                state={state}
                setImageUri={setImageUri}
                setState={setState}
                techStack={techStack}
                touched={touched}
                teamLead={teamLead}
                values={values}
                imageUri={imageUri}
              />
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default AddDeveloper;
