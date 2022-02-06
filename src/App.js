import { Switch, Route } from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";

// components
import Container from "./components/Container";
import AppBar from "./components/AppBar";

// operations

import { authOperations } from "./redux/auth";

// views
import HomeView from "./components/views/HomeView";
import RegisterView from "./components/views/RegisterView";
import LoginView from "./components/views/LoginView";
import NotFoundView from "./components/views/NotFoundView";
import User from "./components/views/User";
// styles
import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/register">
            <RegisterView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>

          <Route path="/user-menu">
            <User />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
