import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

import {
  Layout,
  Loader,
  TechStackModal,
  TechStackCard,
} from "../../../components";
import {findGivenValues, removeEmptyValues} from "../../../services";
import {getTechStack, allDevelopers} from "../../../store/actions/app-flow";

const TechStack = () => {
  const [loading, setLoading] = useState(false);
  const [dev, setDev] = useState(false);
  const [arrDev, setArrDev] = useState([]);
  const [techName, setTechName] = useState("");
  const [modal, setModal] = useState(false);
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
    setTechName(techName);
    setArrDev(removeEmptyValues(findGivenValues(dev, techName)));
    setModal(true);
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
          <TechStackModal
            modalIsOpen={modal}
            setModalIsOpen={setModal}
            arrDev={arrDev}
            techName={techName}
          />
        </div>
      </div>
    </Layout>
  );
};

export default TechStack;
