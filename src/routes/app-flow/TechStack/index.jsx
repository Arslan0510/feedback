import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Layout, Loader, TechStackCard } from "../../../components";
import { getTechStack } from "../../../store/actions/app-flow/developers";

const TechStack = () => {
  const [loading, setLoading] = useState(false);
  const { techStack } = useSelector((state) => state.reducer_developers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (techStack.length === 0) {
      setLoading(true);
      getTechStack({
        dispatch,
        cbSuccess: () => {
          setLoading(false);
        },
        cbFailure: (err) => {
          setLoading(false);
          toast.error(err);
        },
      });
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout title='Tech Stack'>
      <div className='w-100 h-100'>
        <div className='row p-0 m-0 mb-2'>
          {techStack.length !== 0 &&
            techStack.map((tech, i) => (
              <TechStackCard tech={tech} key={tech._id} index={i} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default TechStack;
