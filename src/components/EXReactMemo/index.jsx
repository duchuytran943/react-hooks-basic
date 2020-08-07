import React from "react";
import PropTypes from "prop-types";

ExReactMemo.propTypes = {
  name: PropTypes.string,
};

ExReactMemo.defaultProps = {
  name: "Huy---Huy",
};

function ExReactMemo(props) {
  const { name } = props;
  console.log("Render EXReactMemo");
  return (
    <div>
      <h1> {name}</h1>
    </div>
  );
}

//None rerender this component when props not change
export default React.memo(ExReactMemo);
