import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
  </nav>
);

export default Navigation;
