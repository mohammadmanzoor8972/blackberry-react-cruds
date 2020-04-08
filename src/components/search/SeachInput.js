import React, { useState } from "react";
import PropTypes from 'prop-types';

const SearchInput = ({filterUser}) => {
  const initialFormState = "";
  const [filter, setFilter] = useState(initialFormState);

  const handleInputChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  return (
    <form onSubmit={event => {
        event.preventDefault();
      }}
    >
      <label>Name</label>
      <div style={{ display: "flex" }}>
        <input type="search" name="search" value={filter} onChange={handleInputChange}/>
        &nbsp;
        <button className="btn btn-info" onClick={() => filterUser(filter)}>
          Search
        </button>
      </div>
    </form>
  );
};

SearchInput.propTypes = {
  name: PropTypes.func
};

export default SearchInput;