import styles from "./UserMenu.module.scss";

const UserMenu = () => {
  return (
    <div className={styles.container}>
      {/* <img src={avatar} alt="" width="32" className={s.avatar} /> */}
      <span className={styles.name}>Welcome, User</span>

      <button
        type="button"
        //   onClick={() => dispatch(authOperations.logOut())}
      >
        Sign out
      </button>
    </div>
  );
};

export default UserMenu;
