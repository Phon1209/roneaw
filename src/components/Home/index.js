import React from "react";
import "../../css/App.css";
import TI from "./teacherInput";
import { UserConsumer } from "../userContext";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserConsumer>{({ name }) => <h1>Hello {name==="" ? "Guest":name}</h1>}</UserConsumer>
          <TI />
        </header>
      </div>
    );
  }
}

export default Home;
