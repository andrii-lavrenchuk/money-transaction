import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";

// components
import { Spinner } from "reactstrap";

import Container from "./components/Container";
import AppBar from "./components/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

// operations

import { authOperations } from "./redux/auth";
import { usersOperations } from "./redux/users";

// styles
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

const App = ({ onGetCurrentUser, getAddedContacts, isFetchingCurrentUser }) => {
  useEffect(() => {
    onGetCurrentUser();
  }, [onGetCurrentUser]);

  useEffect(() => {
    getAddedContacts();
  }, [getAddedContacts]);

  return isFetchingCurrentUser ? (
    <div className="spinner-container">
      <Spinner color="info" />
    </div>
  ) : (
    <Container>
      <ToastContainer autoClose={3000} />
      <AppBar />

      <Suspense fallback={null}>
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

const mapStateToProps = (state) => ({
  isFetchingCurrentUser: state.auth.isFetchingCurrentUser,
});

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
  getAddedContacts: usersOperations.getAddedContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
