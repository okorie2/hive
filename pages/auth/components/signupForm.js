import { useFormik } from "formik";
import Link from "next/link";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "../signin.module.css";

export const FormHandler = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "string",
      email: "user@example.com",
      first_name: "string",
      last_name: "string",
      password: "string",
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (values) => {
      dispatch(handleAuth(userDetails));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.authInputContainer}>
          <label>Firstname</label> <br />
          <input
            type="text"
            name="first_name"
            placeholder="doe"
            className={styles.authInput}
            {...formik.getFieldProps("first_name")}
          />
          {formik.touched.first_name && formik.errors.first_name ? (
            <div>{formik.errors.first_name}</div>
          ) : null}
        </div>{" "}
        <div className={styles.authInputContainer}>
          <label>Lastname</label> <br />
          <input
            type="text"
            name="last_name"
            placeholder="john"
            className={styles.authInput}
            {...formik.getFieldProps("last_name")}
          />
          {formik.touched.last_name && formik.errors.last_name ? (
            <div>{formik.errors.last_name}</div>
          ) : null}
        </div>
        <div className={styles.authInputContainer}>
          <label>Username</label> <br />
          <input
            type="text"
            name="username"
            placeholder="john123"
            className={styles.authInput}
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
        </div>
        <div className={styles.authInputContainer}>
          <label>Email</label> <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className={styles.authInput}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className={styles.authInputContainer}>
          <label>Password</label> <br />
          <input
            type="password"
            name="password"
            placeholder="*******"
            {...formik.getFieldProps("password")}
            className={styles.authInput + " " + styles.authpass}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <label>Password must be atleast 6 characters long</label>
        </div>
        <div className={styles.terms}>
          <div>
            <input type="checkbox" />
          </div>
          <div className={styles.termstxt}>
            <span>
              Creating an account means you agree with our{" "}
              <Link href="#">Terms of Service</Link> and{" "}
              <Link href="#">Privacy Policy</Link>
            </span>
          </div>
        </div>
        <div className={styles.signupBtn}>
          <button type="submit">Create your account</button>
        </div>
      </form>
    </>
  );
};
