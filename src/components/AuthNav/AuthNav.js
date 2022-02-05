import { NavLink } from "react-router-dom";

import styles from "./AuthNav.module.scss";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Sign In
      </NavLink>
    </div>
  );
};

export default AuthNav;
