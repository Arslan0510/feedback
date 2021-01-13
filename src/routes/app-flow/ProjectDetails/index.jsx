import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import DetailCard from "./DetailCard";
import { Layout } from "../../../components";

const ProjectDetails = () => {
  const { projects } = useSelector((state) => state.reducer_projects);
  const { id } = useParams();

  return (
    <Layout title='Project Details'>
      <DetailCard project={projects.find((el) => el._id === id)} />
    </Layout>
  );
};

export default ProjectDetails;
