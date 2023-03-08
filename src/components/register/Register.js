import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import NavBar from "../NavBar";

const Register = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email address is required")
      .email("Enter a valid email address"),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
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
              <div style={{ marginBottom: "30px" }}>
                <h1
                  style={{
                    color: "#017bfe",
                    fontSize: "45px",
                    fontWeight: "400",
                  }}
                >
                  SIGN UP
                </h1>
                <h3>Fill in your details</h3>
              </div>
              <div>
                {/* <label>First Name</label> */}
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  name="first_name"
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
                    fontWeight: "500",
                    marginBottom: "15px",
                  }}
                />
                <small>{touched.first_name && errors.first_name}</small>
              </div>
              <div>
                {/* <label>Last Name</label> */}
                <input
                  type="text"
                  placeholder="LAST NAME"
                  name="last_name"
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
                    fontWeight: "500",
                    marginBottom: "15px",
                  }}
                />
                <small>{touched.last_name && errors.last_name}</small>
              </div>
              <div>
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
                    fontWeight: "500",
                    marginBottom: "15px",
                  }}
                />
                <small>{touched.email && errors.email}</small>
              </div>
              <div>
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
                    fontWeight: "500",
                    marginBottom: "17px",
                  }}
                />
                <small>{touched.password && errors.password}</small>
              </div>
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
                SIGN UP
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Register;
