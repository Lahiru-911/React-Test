import React from "react";

const Weather = () => {
  const temp = 15;

  if (temp < 15) {
    return <div>It's cold outside!</div>;
  } else if (temp >= 15 && temp <= 25) {
    return <div>It's nice outside!</div>;
  } else if (temp > 25) {
    <div>It's hot outside!</div>;
  }
};

export default Weather;
