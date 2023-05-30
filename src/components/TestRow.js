import React from "react";
import "./TestRow.css";

const TestRow = ({id, name, group, responses}) => {
  return (
    <div className="rowcontainer">
      <p>{id}</p>
      <p>{name}</p>
      <p>{group}</p>
      <p>{responses}</p>
    </div>
  );
};

export default TestRow;
