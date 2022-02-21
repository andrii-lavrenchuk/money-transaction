import { NavLink } from "react-router-dom";

// styles
import styles from "./AuthNav.module.scss";

const AuthNav = () => {
  return (
    <>
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
    </>
  );
};

export default AuthNav;
