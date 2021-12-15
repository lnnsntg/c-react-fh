import React, { useState } from "react";
import PropTypes from 'prop-types';

function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setCategories((categories) => [...categories, inputValue]);
      setInputValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategory;