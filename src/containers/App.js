import React, { useState } from "react";
import "./App.css";
import Modal from "../components/Modal";
import TestTable from "../components/TestTable";
import ErrorBoundry from "./ErrorBoundry";
import { tests } from "../components/Tests";

function App() {
  
  const [buttonModal, setButtonModal] = useState(false);

  return (
    <div>
      <h1>MathPrep</h1>
      <button onClick={() => setButtonModal(true)}>Create Test</button>
      <Modal trigger={buttonModal} setTrigger={setButtonModal}></Modal>
      <ErrorBoundry>
        <TestTable tests={tests} />
      </ErrorBoundry>
    </div>
  );
}

export default App;
