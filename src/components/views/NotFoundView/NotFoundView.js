import errorImg from "./images/notFound.gif";
import s from "./NotFoundView.module.scss";

const NotFoundView = () => {
  return (
    <div className={s.notFound}>
      <h2 className={s.title}>404 Page not found</h2>
      <img className={s.img} src={errorImg} width="650" alt="Page not found" />
    </div>
  );
};

export default NotFoundView;
