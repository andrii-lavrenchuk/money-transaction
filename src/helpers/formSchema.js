import * as Yup from "yup";
const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(6, "Must have at least 6 or more characters.")
    .max(50, "Too Long!")
    .required("Required"),
});

export default FormSchema;
