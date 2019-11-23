import React from "react";
import "./App.css";
import TI from "./components/teacherInput";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about"></Route>
        <Route path="/dashboard">{/* <Dashboard /> */}</Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <TI />
      </header>
    </div>
  );
}
export default App;
