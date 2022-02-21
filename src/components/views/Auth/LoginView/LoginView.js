import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

// components
import { Button } from "react-bootstrap";

// helpers
import FormSchema from "../../../../helpers/formSchema";

// operations
import { authOperations } from "../../../../redux/auth";

// styles
import styles from "../Auth.module.scss";

const LoginView = ({ onLogin }) => {
  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={FormSchema}
      onSubmit={(values) => {
        const email = values.email;
        const password = values.password;
        onLogin({ email, password });
      }}
      showPassowrd={false}
    >
      {({ errors, touched }) => (
        <Form className={styles.form} autoComplete="off">
          <div className="d-flex flex-column align-items-center">
            <h2 className={styles.text}>
              <strong>Login</strong> with email and password
            </h2>
            <Field
              type="email"
              name="email"
              placeholder="E-mail"
              className={styles.input}
            />

            {errors.email && touched.email ? (
              <div className={styles.errors}>{errors.email}</div>
            ) : null}

            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={styles.input}
            />
            {errors.password && touched.password ? (
              <div className={styles.errors}>{errors.password}</div>
            ) : null}

            <div>
              <Button type="submit" variant="outline-secondary">
                Sign In
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

LoginView.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginView);
