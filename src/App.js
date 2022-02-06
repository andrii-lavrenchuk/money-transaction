import { Switch, Route } from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";
import { lazy, Suspense } from "react";

// components
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

// operations

import { authOperations } from "./redux/auth";

// styles
import "./App.scss";

// views
const HomeView = lazy(
  () =>
    import("./components/views/HomeView") /* webpackChunkName: "home-view" */
);

const RegisterView = lazy(
  () =>
    import(
      "./components/views/RegisterView"
    ) /* webpackChunkName: "register-view" */
);

const LoginView = lazy(
  () =>
    import("./components/views/LoginView") /* webpackChunkName: "login-view" */
);

const User = lazy(
  () => import("./components/views/User") /* webpackChunkName: "user-view" */
);

const NotFoundView = lazy(
  () =>
    import(
      "./components/views/NotFoundView"
    ) /* webpackChunkName: "not-found-view" */
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<p>LOADING...</p>}>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>
            <PublicRoute restricted path="/register">
              <RegisterView />
            </PublicRoute>
            <PublicRoute restricted path="/login">
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/user-menu">
              <User />
            </PrivateRoute>
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
