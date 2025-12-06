import React, { useState } from "react";
import "./Auth.css";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2 className="auth-title">Login</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log("LOGIN DATA:", values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="auth-form">

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

              <Button type="submit" fullWidth variant="contained" className="auth-btn">
                Login
              </Button>

              <p className="auth-switch">
                Don’t have an account? <Link to="/register">Register</Link>
              </p>

            </Form>
          )}
        </Formik>

      </div>
    </div>
  );
};

export default Login;
