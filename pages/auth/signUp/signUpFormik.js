import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormController from "../../../component/formHandler/formController";
import { useDispatch } from "react-redux";
import { handleAuth } from "../../../redux/actions/auth";

export default function FormikWrapper() {
  const dispatch = useDispatch();
  const initialValues = {
    username: "string",
    email: "user@example.com",
    first_name: "string",
    last_name: "string",
    password: "string",
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .max(15, "must be 15 characters or less")
      .required("required"),

    email: Yup.string().email("Invalid email address").required("required"),

    first_name: Yup.string()
      .max(15, "must be 15 characters or less")
      .required("required"),

    last_name: Yup.string()
      .max(15, "must be 15 characters or less")
      .required("required"),

    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("required"),
  });
  const onSubmit = (values) => {
    dispatch(handleAuth(values));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormController
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormController
            control="input"
            type="text"
            label="username"
            name="username"
          />{" "}
          <FormController
            control="input"
            type="text"
            label="first_name"
            name="first_name"
          />{" "}
          <FormController
            control="input"
            type="text"
            label="last name"
            name="last_name"
          />
          <FormController
            control="input"
            type="password"
            label="password"
            name="password"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
// export default FormikContainer
