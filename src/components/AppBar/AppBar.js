import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

import Navigation from "../Navigation/";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";

import styles from "./AppBar.module.scss";

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
