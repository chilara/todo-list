import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import NavBar from "../NavBar";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email address is required")
      .email("Enter a valid email address"),
  });

  return (
    <div className="todoContainer">
      <NavBar />
      <div className="todoBody">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
            isSubmitting,
          }) => (
            <form>
              <div style={{ marginBottom: "35px", marginTop: "70px" }}>
                <h1
                  style={{
                    color: "#017bfe",
                    fontSize: "45px",
                    fontWeight: "400",
                  }}
                >
                  LOGIN
                </h1>
                <h3>Welcome back!</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {/* <label>Email</label> */}
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  style={{
                    outline: "none",
                    width: "30%",
                    height: "45px",
                    backgroundColor: "white",
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.075)",
                    borderRadius: "10px",
                    paddingLeft: "15px",
                    color: "black",
                    border: "none",
                    marginBottom: "17px",
                  }}
                />
                <small>{touched.email && errors.email}</small>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {/* <label>Password</label> */}
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  style={{
                    outline: "none",
                    width: "30%",
                    height: "45px",
                    backgroundColor: "white",
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.075)",
                    borderRadius: "10px",
                    paddingLeft: "15px",
                    color: "black",
                    border: "none",
                    marginBottom: "19px",
                  }}
                />
                <small>{touched.password && errors.password}</small>
              </div>
            </form>
          )}
        </Formik>
        <button
          style={{
            backgroundColor: "#017bfe",
            width: "31.5%",
            height: "43px",
            color: "white",
            padding: "8px 24px",
            lineHeight: "150%",
            border: "none",
            borderRadius: "8px",
            marginBottom: "8px",
            cursor: "pointer",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.075)",
          }}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
