import { useFormik } from "formik";
import Link from "next/link";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { handleAuth } from "../../../redux/actions/auth";
import { Error } from "../../../styles/components/Error";
import styles from "../signin.module.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

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
      dispatch(handleAuth(values));
    },
  });

  const [visibility, setVisibility] = useState(false);
  const [checked, setChecked] = useState(false);
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  const { data, loading, error } = useSelector(({ auth }) => auth);

  console.log(data.status, "data");
  const alert = () => {
    if (data?.status) {
      toast.success(data && data?.response?.data?.message, { autoClose: 4000 });
    } else {
      toast.warn(data && data?.response?.data?.message, { autoClose: 4000 });
    }
  };

  useEffect(() => {
    if (!loading) {
      alert();
    }
  }, [data]);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <ToastContainer autoClose={8000} />
        <div className={styles.authInputContainer}>
          <label>Firstname</label> <br />
          <div
            className={styles.inputContainer}
            style={{
              border:
                formik.touched.first_name && formik.errors.first_name
                  ? "1.5px solid red"
                  : "1.5px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <input
              type="text"
              name="first_name"
              placeholder="doe"
              className={styles.authInput}
              {...formik.getFieldProps("first_name")}
            />
          </div>
          {formik.touched.last_name && formik.errors.last_name ? (
            <Error>{formik.errors.last_name}</Error>
          ) : null}
        </div>{" "}
        <div className={styles.authInputContainer}>
          <label>Lastname</label> <br />
          <div
            className={styles.inputContainer}
            style={{
              border:
                formik.touched.last_name && formik.errors.last_name
                  ? "1.5px solid red"
                  : "1.5px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <input
              type="text"
              name="last_name"
              placeholder="john"
              className={styles.authInput}
              {...formik.getFieldProps("last_name")}
            />
          </div>
          {formik.touched.last_name && formik.errors.last_name ? (
            <Error>{formik.errors.last_name}</Error>
          ) : null}
        </div>
        <div className={styles.authInputContainer}>
          <label>Username</label> <br />
          <div
            className={styles.inputContainer}
            style={{
              border:
                formik.touched.username && formik.errors.username
                  ? "1.5px solid red"
                  : "1.5px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <input
              type="text"
              name="username"
              placeholder="john123"
              className={styles.authInput}
              {...formik.getFieldProps("username")}
            />
          </div>
          {formik.touched.username && formik.errors.username ? (
            <Error>{formik.errors.username}</Error>
          ) : null}
        </div>
        <div className={styles.authInputContainer}>
          <label>Email</label> <br />
          <div
            className={styles.inputContainer}
            style={{
              border:
                formik.touched.email && formik.errors.email
                  ? "1.5px solid red"
                  : "1.5px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              className={styles.authInput}
              {...formik.getFieldProps("email")}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <Error>{formik.errors.email}</Error>
          ) : null}
        </div>
        <div className={styles.authInputContainer}>
          <label>Password</label> <br />
          <div
            className={styles.inputContainer}
            style={{
              border:
                formik.touched.password && formik.errors.password
                  ? "1px solid red"
                  : "1.5px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <input
              type={visibility ? "text" : "password"}
              name="password"
              placeholder="*******"
              {...formik.getFieldProps("password")}
              className={styles.authInput + " " + styles.authpass}
            />
            <div className={styles.icon} onClick={toggleVisibility}>
              <Image src={"/svgs/eye.svg"} width={25} height={25} alt="eye" />
            </div>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <Error>{formik.errors.password}</Error>
          ) : null}
          <label>Password must be atleast 6 characters long</label>
        </div>
        <div className={styles.terms}>
          <div>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
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
          <button
            type="submit"
            disabled={checked ? false : true}
            style={{ backgroundColor: !checked ? "grey" : "#4ab5e1" }}
          >
            Create your account
          </button>
        </div>
      </form>
    </>
  );
};
