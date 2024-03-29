import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { CardView, Loader, Layout, Pagination } from "../../../components";
import { getAllProjects } from "../../../store/actions";
import { paginate } from "../../../services";

const CompletedFeedback = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { completedProjects } = useSelector((state) => state.reducer_projects);
  const dispatch = useDispatch();
  const isCompleted = true;

  useEffect(() => {
    if (completedProjects.length === 0) getProjects();
  }, []);

  const getProjects = () => {
    setLoading(true);
    getAllProjects({
      isCompleted,
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
    <Layout title='Completed Feedback'>
      <CardView
        getProjects={getProjects}
        history={history}
        list={paginate(completedProjects, currentPage, 6)}
      />
      <Pagination
        itemsCount={completedProjects.length}
        pageSize={6}
        currentPage={currentPage}
        onPageChange={(num) => setCurrentPage(num)}
      />
    </Layout>
  );
};

export default CompletedFeedback;
