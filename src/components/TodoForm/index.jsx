import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

TodoForm.propTypes = {
  onSubmitForm: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmitForm: null,
};

function TodoForm(props) {
  const { onSubmitForm } = props;
  const [value, setValue] = useState("");

  function handleInputValue(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    //prevent browser
    e.preventDefault();
    if (!onSubmitForm) return;
    const formValue = { title: value };
    onSubmitForm(formValue);
    //reset value of form
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter new todo:</label>
      <input type="text" value={value} onChange={handleInputValue} />
    </form>
  );
}

export default TodoForm;
