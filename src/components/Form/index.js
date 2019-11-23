import React, { Component } from "react";
import "../../css/App.css";
import { UserConsumer } from "../userContext";

class Form extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserConsumer>{({ name }) => <h1>Hello {name}</h1>}</UserConsumer>
        </header>
      </div>
    );
  }
}

export default Form;
