import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <>
    <NavLink
      to="/users"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      All Users
    </NavLink>
    <NavLink
      to="/user-contacts"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      User Contacts
    </NavLink>

    <NavLink
      to="/user-transactions"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      User Transactions
    </NavLink>

    <NavLink
      to="/user-menu"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      User Menu
    </NavLink>
  </>
);

export default Navigation;
