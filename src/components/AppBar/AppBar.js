import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

import Navigation from "../Navigation/";
import AuthNav from "../AuthNav";
import logoImg from "../../images/svg/money-logo.svg";

import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const AppBar = ({ isAuthenticated }) => (
  <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
    <Container>
      <Navbar.Brand>
        <NavLink to="/">
          <img
            src={logoImg}
            width="50"
            className="d-inline-block align-top"
            alt="money-logo"
          />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>{isAuthenticated ? <Navigation /> : <AuthNav />}</Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
