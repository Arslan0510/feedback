import React from "react";
import Select from "react-select";

const Dropdown = ({
  dName,
  disable,
  handleChange,
  multiSelect,
  options,
  selectedOption,
  title,
}) => {
  return (
    <div className='wrap-input100 border-0 bg1 rs1-wrap-input100'>
      <span className='label-input100 mb-1'>{title}</span>
      <Select
        className='basic-multi-select mt-3'
        classNamePrefix='select'
        isDisabled={disable}
        isMulti={multiSelect ? true : false}
        name='colors'
        options={options}
        onChange={(selectedOption) => handleChange(selectedOption, dName)}
        value={selectedOption}
      />
    </div>
  );
};

export default Dropdown;
