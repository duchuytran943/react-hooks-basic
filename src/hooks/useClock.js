import { useState, useEffect } from "react";

function formatTimeToString(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const date = new Date();
      const newTimeString = formatTimeToString(date);
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      //cleanup
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
