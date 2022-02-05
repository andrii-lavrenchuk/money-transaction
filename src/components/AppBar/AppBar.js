import Navigation from "../Navigation/";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";

import styles from "./AppBar.module.scss";

const AppBar = () => (
  <header className={styles.header}>
    <Navigation />
    <AuthNav />
    <UserMenu />
  </header>
);

export default AppBar;
