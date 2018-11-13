import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import Login from "./Login";
import App from "./App";

class ReactRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <Login />;
            }}
          />
          <Route
            path="/proyectos"
            exact
            render={() => {
              return <App />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default ReactRouter;
