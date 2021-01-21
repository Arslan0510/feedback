import React from "react";
import {Loader} from "../..";

const LazyLoadingButton = ({disabled, handleLoading, loading}) => {
  return (
    <div className='col text-center mb-2 mt-2'>
      {loading ? (
        <Loader />
      ) : (
        disabled && (
          <button className='btn btn-primary' onClick={handleLoading}>
            Load More
          </button>
        )
      )}
    </div>
  );
};

export default LazyLoadingButton;
