import { connect } from "react-redux";
import { authOperations } from "../../../../redux/auth";
import FormSchema from "../../../../helpers/formSchema";
import { Formik, Form, Field } from "formik";
import styles from "../Auth.module.scss";
import { Button } from "react-bootstrap";

const RegisterView = ({ onRegister }) => {
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
        console.log("submit");
        onRegister({ email, password });
      }}
      showPassowrd={false}
    >
      {({ errors, touched }) => (
        <Form className={styles.form} autoComplete="off">
          <div className="d-flex flex-column align-items-center">
            <h2 className={styles.text}>
              <strong>Signup</strong> with email and password
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
                Sign Up
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
