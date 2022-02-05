import { connect } from "react-redux";

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
  isAuthenticated: state.auth.token,
});

export default connect(mapStateToProps, null)(AppBar);
