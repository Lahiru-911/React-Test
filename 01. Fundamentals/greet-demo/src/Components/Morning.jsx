import React from "react";

const Morning = (props) => {
  return props.timeDay === "GoodMorning" ? (
    <div>Good Morning</div>
  ) : (
    <div>Good afternoon!</div>
  );
};

export default Morning;
