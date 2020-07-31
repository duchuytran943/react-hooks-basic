import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const LIST_COLOR = ["deeppink", "blue", "yellow", "black", "red"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return LIST_COLOR[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("color") || "deeppink";
  });

  function handleClickBox() {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleClickBox}
    ></div>
  );
}

export default ColorBox;
