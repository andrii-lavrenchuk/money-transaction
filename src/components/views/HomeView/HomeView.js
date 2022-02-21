import styles from "./HomeView.module.scss";

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Welcome to the money bank!
      <span role="img" aria-label="hello icon">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;
