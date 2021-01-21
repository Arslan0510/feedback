import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

import {getAllProjects, getProjectByName} from "../../../store/actions";
import {CardView, Layout, LazyLoadingButton, Loader} from "../../../components";

import "./projects.css";
import {SET_PROJECTS} from "../../../store/constants";
import Filters from "./Filters";

const Projects = ({history}) => {
  const [loading, setLoading] = useState(false);
  const [lazyLoading, setLazyLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState(1);
  const [search, setSearch] = useState({byProjectName: "", byClientName: ""});
  const [searchProject, setSearchProject] = useState([]);
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

  const handleSearch = () => {
    setLoading(true);
    getProjectByName({
      search,
      dispatch,
      cbSuccess: (data) => {
        setSearchProject(data);
        setLoading(false);
      },
      cbFailure: (err) => {
        setLoading(false);
        toast.error(err);
      },
    });
    setIsOpen(false);
  };

  const handleClear = () => {
    setSearchProject([]);
    setIsOpen(false);
    getProjects();
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
      onRefresh={() => setIsOpen(true)}
      icon='fa-filter'>
      <Filters
        handleClear={handleClear}
        handleSearch={handleSearch}
        isOpen={isOpen}
        isClose={() => setIsOpen(false)}
        search={search}
        setSearchByProject={(text) => setSearch({byProjectName: text})}
        setSearchByClient={(text) => setSearch({byClientName: text})}
      />
      <CardView list={searchProject.length > 0 ? searchProject : projects} />
      <LazyLoadingButton
        disabled={searchProject.length > 0 ? false : true}
        handleLoading={handleLoading}
        loading={lazyLoading}
      />
    </Layout>
  );
};

export default Projects;
