import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import TI from "./teacherInput";
import { UserConsumer } from "../userContext";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserConsumer>{({ name }) => <h1>Hello {name}</h1>}</UserConsumer>
          <Link to="/about">JK</Link>
          <TI />
        </header>
      </div>
    );
  }
}

export default Home;
