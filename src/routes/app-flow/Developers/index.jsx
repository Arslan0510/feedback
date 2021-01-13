import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { DeveloperCard, Layout, Loader } from "../../../components";
import { allDevelopers } from "../../../store/actions";

import "./developers.css";

const Developers = () => {
  const [developersArray, setDevelopersArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    allDevelopers({
      cbSuccess: (data) => {
        setDevelopersArray(data);
        setLoading(false);
      },
      cbFailure: (err) => {
        setLoading(false);
        toast.error(err);
      },
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout title='Developers'>
      <div class='container'>
        <div class='row mb-2'>
          {developersArray.length !== 0 &&
            developersArray.map((dev) => (
              <DeveloperCard key={dev._id} developer={dev} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Developers;
