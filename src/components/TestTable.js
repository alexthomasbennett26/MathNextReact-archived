import React from "react";
import Testrow from "./TestRow";
import "./TestTable.css";

const TestTable = ({ tests }) => {
  return (
    tests.map((user, i) => {
      return (
        <Testrow
          key={i}
          id={tests[i].id}
          name={tests[i].name}
          group={tests[i].group}
          responses={tests[i].responses}
        />
      );
}))};

// the above logic in overly complex to account for the search functionality we no longer have

export default TestTable;
