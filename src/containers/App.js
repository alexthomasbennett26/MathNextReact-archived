import React, { Component } from "react";
import "./App.css";
import TestTable from "../components/TestTable";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll"

class App extends Component {
  constructor() {
    super();
    this.state = {
      tests: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ tests: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredTests = this.state.tests.filter((test) => {
      return test.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    if (this.state.tests.length === 0) {
      return (
        <div>
          <h1>MathPrep</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <button className="primary">Create Test</button>
          <h1>Loading</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>MathPrep</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <button className="primary">Create Test</button>
          <Scroll>
            <TestTable tests={filteredTests} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
