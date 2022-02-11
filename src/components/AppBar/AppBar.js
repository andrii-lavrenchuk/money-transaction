import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

import Navigation from "../Navigation/";
import AuthNav from "../AuthNav";

import { Navbar, NavbarBrand, NavItem } from "reactstrap";

import styles from "./AppBar.module.scss";
import { NavLink } from "react-router-dom";

const AppBar = ({ isAuthenticated }) => (
  <Navbar color="info" expand="md" light>
    <NavLink to="/" exact>
      Home
    </NavLink>

    {isAuthenticated ? <Navigation /> : <AuthNav />}
  </Navbar>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
