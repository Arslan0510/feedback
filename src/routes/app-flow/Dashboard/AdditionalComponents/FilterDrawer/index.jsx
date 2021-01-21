import React from "react";
import Slider from "react-slide-out";
import "react-slide-out/lib/index.css";
import {Dropdown} from "../../../../../components";
import {filters} from "./filter-drawer";

const FilterDrawer = ({
  applyFilter,
  checked,
  isOpen,
  isClose,
  handleChange,
  options,
  onChange,
}) => {
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
        <section>
          <h6>Stack filter</h6>
          <Dropdown
            handleChange={handleChange}
            multiSelect={true}
            options={options}
            title='Select Tech Stack'
          />
          <button className='btn btn-sm btn-primary mb-3' onClick={applyFilter}>
            Apply filter
          </button>
        </section>
      </div>
    </Slider>
  );
};

export default FilterDrawer;
