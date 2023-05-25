import React, { Component } from 'react';

import Editor from "./components/Editor";
import Test from "./components/Testcomponent";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Editor text="first" />
        <Editor text="second" />
        <Test text="third" />
      </div>
    );
  }
} 

export default App;
