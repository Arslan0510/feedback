import React from "react";

const SearchBar = ({handleSearch, placeholder, search, setSearch}) => {
  return (
    <div className='input-group mb-3'>
      <input
        type='text'
        className='form-control'
        placeholder={placeholder}
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
      <div className='input-group-append'>
        <button
          className='btn btn-primary'
          type='button'
          onClick={handleSearch}>
          <i className='fa fa-search' />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
