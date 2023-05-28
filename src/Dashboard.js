import React from "react";
import TestTable from "./TestTable"


const Dashboard = (props) => {
  return (
    <div>
      <h1>Hello</h1>
      <p>{props.greeting}</p>
      <button className="primary">Create Test</button>
      <TestTable tests={tests}/>
    </div>
  );
};


export default Dashboard;
