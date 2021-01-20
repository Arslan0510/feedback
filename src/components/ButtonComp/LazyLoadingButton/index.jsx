import React from "react";
import {Loader} from "../..";

const LazyLoadingButton = ({handleLoading, loading}) => {
  return (
    <div className='col text-center mb-2 mt-2'>
      {loading ? (
        <Loader />
      ) : (
        <button className='btn btn-primary' onClick={handleLoading}>
          Load More
        </button>
      )}
    </div>
  );
};

export default LazyLoadingButton;
