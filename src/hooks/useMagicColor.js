import { useEffect, useState, useRef } from "react";

function getMagicColor(colorRef) {
  const LIST_COLOR = ["red", "green", "blue"];
  const currentIndex = LIST_COLOR.indexOf(colorRef);
  let newIndex = currentIndex;
  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }
  return LIST_COLOR[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = getMagicColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);

    return () => {
      //clear up
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;
