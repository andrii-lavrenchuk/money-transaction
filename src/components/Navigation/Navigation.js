import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <nav>
    {/* <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink> */}

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
  </nav>
);

export default Navigation;
