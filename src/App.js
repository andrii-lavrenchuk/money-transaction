import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";

// components
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

// operations

import { authOperations } from "./redux/auth";

// styles
import "react-toastify/dist/ReactToastify.css";
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

const UserContactsView = lazy(
  () =>
    import(
      "./components/views/UserContactsView"
    ) /* webpackChunkName: "user-contacts-view" */
);

const UserTransactions = lazy(
  () =>
    import(
      "./components/views/UserTransactions"
    ) /* webpackChunkName: "user-transacrions-view" */
);

const NotFoundView = lazy(
  () =>
    import(
      "./components/views/NotFoundView"
    ) /* webpackChunkName: "not-found-view" */
);

const App = ({ onGetCurrentUser }) => {
  useEffect(() => {
    onGetCurrentUser();
  }, [onGetCurrentUser]);

  return (
    <Container>
      <ToastContainer autoClose={3000} />
      <AppBar />

      <Suspense fallback={<p>LOADING from APP...</p>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <PublicRoute restricted path="/register" redirectTo="/user-menu">
            <RegisterView />
          </PublicRoute>
          <PublicRoute restricted path="/login" redirectTo="/user-menu">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/user-menu" redirectTo="/login">
            <User />
          </PrivateRoute>
          <PrivateRoute path="/user-contacts" redirectTo="/login">
            <UserContactsView />
          </PrivateRoute>

          <PrivateRoute path="/user-transactions" redirectTo="/login">
            <UserTransactions />
          </PrivateRoute>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
