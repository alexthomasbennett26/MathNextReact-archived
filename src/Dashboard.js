import React from "react";
import TestTable from "./TestTable"

const Dashboard = (props) => {
  return (
    <div>
      <h1>Hello</h1>
      <p>{props.greeting}</p>
      <TestTable />
    </div>
  );
};

export default Dashboard;
