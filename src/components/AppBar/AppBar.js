import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

import Navigation from "../Navigation/";
import AuthNav from "../AuthNav";

import styles from "./AppBar.module.scss";
import { NavLink } from "react-router-dom";

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    {isAuthenticated ? <Navigation /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
