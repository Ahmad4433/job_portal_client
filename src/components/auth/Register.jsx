import React, { useState } from "react";
import "./Auth.css";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Password required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm your password"),
});

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2 className="auth-title">Create Account</h2>

        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            console.log("REGISTER DATA:", values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="auth-form">

              {/* Name */}
              <Field
                name="name"
                as={TextField}
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                error={errors.name && touched.name}
                helperText={touched.name && errors.name}
              />

              {/* Email */}
              <Field
                name="email"
                as={TextField}
                label="Email Address"
                variant="outlined"
                fullWidth
                margin="normal"
                error={errors.email && touched.email}
                helperText={touched.email && errors.email}
              />

              {/* Password */}
              <Field
                name="password"
                as={TextField}
                label="Password"
                type={showPass ? "text" : "password"}
                variant="outlined"
                fullWidth
                margin="normal"
                error={errors.password && touched.password}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPass(!showPass)}>
                        {showPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Confirm Password */}
              <Field
                name="confirmPassword"
                as={TextField}
                label="Confirm Password"
                type={showPass ? "text" : "password"}
                variant="outlined"
                fullWidth
                margin="normal"
                error={errors.confirmPassword && touched.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
              />

              <Button type="submit" fullWidth variant="contained" className="auth-btn">
                Register
              </Button>

              <p className="auth-switch">
                Already have an account? <Link to="/login">Login</Link>
              </p>

            </Form>
          )}
        </Formik>

      </div>
    </div>
  );
};

export default Register;
