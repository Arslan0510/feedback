import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

import {DCard, DeveloperCard, Layout, Loader} from "../../../components";
import {allDevelopers} from "../../../store/actions";

import "./developers.css";

const Developers = () => {
  const [loading, setLoading] = useState(false);
  const {developers} = useSelector((state) => state.reducer_developers);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    if (developers.length === 0)
      allDevelopers({
        dispatch,
        cbSuccess: () => {
          setLoading(false);
        },
        cbFailure: (err) => {
          setLoading(false);
          toast.error(err);
        },
      });
    else setLoading(false);
  }, []);

  if (loading) return <Loader />;

  return (
    <Layout title='Developers'>
      <div className='w-100 h-100'>
        <div className='row mb-2'>
          {developers.length !== 0 &&
            developers.map((dev) => <DCard key={dev._id} developer={dev} />)}
        </div>
      </div>
    </Layout>
  );
};

export default Developers;
