import React from "react";
import Slider from "react-slide-out";
import "react-slide-out/lib/index.css";
import "./styles.css";

import {SearchBar} from "../../../../components";

const Filters = ({
  handleClear,
  handleSearch,
  isOpen,
  isClose,
  search,
  setSearchByProject,
  setSearchByClient,
}) => {
  return (
    <Slider
      footer={
        <div style={{padding: 15}}>
          <button className='btn btn-primary' onClick={isClose}>
            x
          </button>
        </div>
      }
      isOpen={isOpen}
      title='Filters'
      onOutsideClick={isClose}>
      <div style={{padding: "15px"}}>
        <h6 className='font-weight-bold mb-3'>Condition</h6>
        <SearchBar
          handleSearch={handleSearch}
          placeholder='Search project by name'
          search={search.byProjectName}
          setSearch={setSearchByProject}
        />
        <SearchBar
          handleSearch={handleSearch}
          placeholder='Search project by client name'
          search={search.byClientName}
          setSearch={setSearchByClient}
        />
        <button className='btn btn-sm btn-danger mt-3' onClick={handleClear}>
          Clear filter
        </button>
      </div>
    </Slider>
  );
};

export default Filters;
