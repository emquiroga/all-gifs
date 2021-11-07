import React, { useState } from "react";
import { register } from "services/register";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Register.css";
import { useLocation } from "wouter";

const validateFields = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "* Username is required";
  }
  if (!values.password) {
    errors.password = "* Password is required";
  } else if (values.password.length < 6) {
    errors.password = "* Password must be at least 6 characters";
  }
  return errors;
};

const Register = () => {
  const [, setLocation] = useLocation();
  const [registered, setRegistered] = useState(false);

  if (registered) return <h2> ✔ Successfully registered, redirecting...</h2>;

  return (
    <div>
      <h2 className="Login-title">Register</h2>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validate={validateFields}
        onSubmit={(values, { setFieldError }) => {
          return register(values)
            .then(() => {
              setRegistered(true);
              setTimeout(() => {
                setLocation("/login");
              }, 4500);
            })
            .catch(
              setFieldError("username", "* This username is not avaliable")
            );
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form className="Login-form">
            <ErrorMessage
              name="username"
              component="div"
              className="Register-errors"
            />
            <Field
              placeholder="Select your username"
              name="username"
              type="text"
              className={errors.username ? "error-input" : ""}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="Register-errors"
            />
            <Field
              placeholder="Select your password"
              name="password"
              type="password"
              className={errors.password ? "error-input" : ""}
            />
            <button type="submit" className="btn" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
