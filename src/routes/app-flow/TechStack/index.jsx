import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

import {Layout, Loader, TechStackCard} from "../../../components";
import {getTechStack, allDevelopers} from "../../../store/actions/app-flow";

const TechStack = () => {
  const [loading, setLoading] = useState(false);
  const [dev, setDev] = useState(false);
  const {techStack} = useSelector((state) => state.reducer_developers);
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
      allDevelopers({
        dispatch,
        cbSuccess: (dev) => {
          setLoading(false);
          setDev(dev);
        },
        cbFailure: (err) => {
          setLoading(false);
          toast.error(err);
        },
      });
    }
  }, []);

  const handleClick = (techName) => {
    var obj = [];
    dev.forEach((el) =>
      el.techStack.forEach((ele) => {
        if (ele.name === techName) obj.push(el.developerName);
      })
    );
    alert(obj);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout title='Tech Stack'>
      <div className='w-100 h-100'>
        <div className='row p-0 m-0 mb-2'>
          {techStack.length !== 0 &&
            techStack.map((tech, i) => (
              <TechStackCard
                tech={tech}
                key={tech._id}
                index={i}
                handleClick={handleClick}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default TechStack;
