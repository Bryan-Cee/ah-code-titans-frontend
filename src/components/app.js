import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";
import HomePage from "./containers/homePage";
import NotFoundPage from "./views/NotFoundPage";
import RegistrationPage from "./containers/registration";
import "../assets/style/main.scss";

/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={RegistrationPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);