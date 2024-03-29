import React from "react";
import Slider from "react-slide-out";
import "react-slide-out/lib/index.css";
import {filters} from "./filter-drawer";

const FilterDrawer = ({checked, isOpen, isClose, onChange}) => {
  return (
    <Slider
      footer={
        <div style={{padding: "15px"}}>
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
        {filters.map((filter) => (
          <div className='form-check pl-0 mb-3 ml-3' key={filter.id}>
            <input
              type='checkbox'
              className='form-check-input filled-in'
              checked={checked[filter.for]}
              id={filter.for}
              onChange={() => onChange(filter.for)}
            />
            <label
              className='form-check-label small text-uppercase card-link-secondary'
              htmlFor={filter.for}>
              {filter.name}
            </label>
          </div>
        ))}
      </div>
    </Slider>
  );
};

export default FilterDrawer;
