import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./components/userContext";
import Form from "./components/Form";
import Home from "./components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateName = state => {
      this.setState({
        name: state.selectedTeacher,
        id: state.selectedOrganization
      });
    };
    this.state = {
      name: "",
      id: 0,
      updateName: this.updateName
    };
  }

  render() {
    return (
      <UserProvider value={this.state}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">Hello</Route>
            <Route path="/dashboard">{/* <Dashboard /> */}</Route>
            <Route path="/form">
              <Form />
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    );
  }
}

export default App;
