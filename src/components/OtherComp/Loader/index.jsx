import React from "react";
import {MoonLoader} from "react-spinners";

import "./Loader.css";

const Loader = () => {
  return (
    <div className='content-container'>
      <div className='container-fluid'>
        <div className='loading'>
          <MoonLoader color='#009195' size={30} loading />
        </div>
      </div>
    </div>
  );
};

export default Loader;
