import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

import {getAllProjects} from "../../../store/actions";
import {CardView, Layout, LazyLoadingButton, Loader} from "../../../components";

import "./projects.css";
import {SET_PROJECTS} from "../../../store/constants";

const Projects = ({history}) => {
  const [loading, setLoading] = useState(false);
  const [lazyLoading, setLazyLoading] = useState(false);
  const [size, setSize] = useState(1);
  const {projects} = useSelector((state) => state.reducer_projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (projects.length === 0) getProjects();
    return () => dispatch({type: SET_PROJECTS, payload: []});
  }, []);

  const getProjects = (stopLoading) => {
    if (!stopLoading) {
      setLoading(true);
      getAllProjects({
        size,
        stopLoading,
        dispatch,
        cbSuccess: () => setLoading(false),
        cbFailure: (err) => {
          setLoading(false);
          toast.error(err);
        },
      });
    } else
      getAllProjects({
        size,
        stopLoading,
        dispatch,
        projects,
        cbSuccess: () => setLazyLoading(false),
        cbFailure: (err) => {
          setLazyLoading(false);
          toast.error(err);
        },
      });
  };

  const handleLoading = (e) => {
    e.preventDefault();
    setSize(size + 1);
    setLazyLoading(true);
  };

  useEffect(() => {
    getProjects(true);
  }, [size]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout
      button='btn-danger'
      title='Projects'
      onRefresh={getProjects}
      icon='fa-undo'>
      <CardView getProjects={getProjects} history={history} list={projects} />
      <LazyLoadingButton handleLoading={handleLoading} loading={lazyLoading} />
    </Layout>
  );
};

export default Projects;
