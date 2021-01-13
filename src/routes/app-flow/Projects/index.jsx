import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { getAllProjects } from "../../../store/actions";
import { CardView, Layout, Loader, Pagination } from "../../../components";
import { paginate } from "../../../services";

import "./projects.css";

const Projects = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { projects } = useSelector((state) => state.reducer_projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (projects.length === 0) getProjects();
  }, []);

  const getProjects = () => {
    setLoading(true);
    getAllProjects({
      dispatch,
      cbSuccess: () => setLoading(false),
      cbFailure: (err) => {
        setLoading(false);
        toast.error(err);
      },
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout title='Projects'>
      <CardView
        getProjects={getProjects}
        history={history}
        list={paginate(projects, currentPage, 6)}
      />
      <Pagination
        itemsCount={projects.length}
        pageSize={6}
        currentPage={currentPage}
        onPageChange={(num) => setCurrentPage(num)}
      />
    </Layout>
  );
};

export default Projects;
