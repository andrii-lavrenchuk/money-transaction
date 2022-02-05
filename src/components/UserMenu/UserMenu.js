import { NavLink } from "react-router-dom";
import styles from "./UserMenu.module.scss";

const UserMenu = () => {
  return (
    <div className={styles.container}>
      {/* <img src={avatar} alt="" width="32" className={s.avatar} /> */}
      {/* <span className={styles.name}>Welcome, User</span> */}

      {/* <button
        type="button"
        //   onClick={() => dispatch(authOperations.logOut())}
      >
        Sign out
      </button> */}

      <NavLink
        to="/user-menu"
        // className={styles.link}
        // activeClassName={styles.activeLink}
      >
        User menu
      </NavLink>
    </div>
  );
};

export default UserMenu;
