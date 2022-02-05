import { Switch, Route } from "react-router-dom";

// components
import Container from "./components/Container";
import AppBar from "./components/AppBar";

// views
import HomeView from "./components/views/HomeView";
import RegisterView from "./components/views/RegisterView";
import LoginView from "./components/views/LoginView";
import NotFoundView from "./components/views/NotFoundView";
import User from "./components/views/User";
// styles
import "./App.scss";

function App() {
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

export default App;
