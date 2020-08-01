import React from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const { onSubmit } = props;

  const typingTimeoutRef = useRef(null); // tao 1 object khong bi mat di giua nhung lan render

  function handleChangeFilters(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      onSubmit(value);
    }, 300);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleOnSubmit}>
      Search:
      <input type="text" value={searchTerm} onChange={handleChangeFilters} />
    </form>
  );
}

export default PostFiltersForm;
