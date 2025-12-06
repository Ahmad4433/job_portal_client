import React from "react";
import "./PostJob.css";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";


import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const PostJobSchema = Yup.object().shape({
  title: Yup.string().required("Job title is required"),
  company: Yup.string().required("Company name is required"),
  category: Yup.string().required("Category is required"),
  jobType: Yup.string().required("Job type is required"),
  location: Yup.string().required("Location is required"),
  minSalary: Yup.number()
    .required("Minimum salary is required")
    .positive()
    .integer(),
  maxSalary: Yup.number()
    .required("Maximum salary is required")
    .positive()
    .integer()
    .moreThan(Yup.ref("minSalary"), "Max salary must be greater"),
  description: Yup.string()
    .min(20, "Description must be at least 20 characters")
    .required("Job description is required"),
});

const PostJob = () => {
  return (
    <div className="postjob-container">
      <div className="postjob-box">

        <h1 className="postjob-title">Post a New Job</h1>

        <Formik
          initialValues={{
            title: "",
            company: "",
            category: "",
            jobType: "",
            location: "",
            minSalary: "",
            maxSalary: "",
            description: "",
          }}
          validationSchema={PostJobSchema}
          onSubmit={(values) => {
            console.log("Job Posted:", values);
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form className="postjob-form">

              {/* Job Title */}
              <Field
                name="title"
                as={TextField}
                label="Job Title"
                fullWidth
                margin="normal"
                error={touched.title && !!errors.title}
                helperText={touched.title && errors.title}
              />

              {/* Company */}
              <Field
                name="company"
                as={TextField}
                label="Company Name"
                fullWidth
                margin="normal"
                error={touched.company && !!errors.company}
                helperText={touched.company && errors.company}
              />


              {/* Category Dropdown */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select
                  value={values.category}
                  label="Category"
                  onChange={(e) => setFieldValue("category", e.target.value)}
                  error={touched.category && !!errors.category}
                >
                  <MenuItem value="IT & Software">IT & Software</MenuItem>
                  <MenuItem value="Design">Design</MenuItem>
                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Engineering">Engineering</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                </Select>
                {touched.category && errors.category && (
                  <p className="error-text">{errors.category}</p>
                )}
              </FormControl>

              {/* Job Type */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Job Type</InputLabel>
                <Select
                  value={values.jobType}
                  label="Job Type"
                  onChange={(e) => setFieldValue("jobType", e.target.value)}
                  error={touched.jobType && !!errors.jobType}
                >
                  <MenuItem value="Full-Time">Full-Time</MenuItem>
                  <MenuItem value="Part-Time">Part-Time</MenuItem>
                  <MenuItem value="Remote">Remote</MenuItem>
                  <MenuItem value="Internship">Internship</MenuItem>
                </Select>
                {touched.jobType && errors.jobType && (
                  <p className="error-text">{errors.jobType}</p>
                )}
              </FormControl>

              {/* Location */}
              <Field
                name="location"
                as={TextField}
                label="Job Location"
                fullWidth
                margin="normal"
                error={touched.location && !!errors.location}
                helperText={touched.location && errors.location}
              />

              {/* Salary */}
              <div className="salary-row">
                <Field
                  name="minSalary"
                  as={TextField}
                  label="Min Salary"
                  type="number"
                  fullWidth
                  margin="normal"
                  error={touched.minSalary && !!errors.minSalary}
                  helperText={touched.minSalary && errors.minSalary}
                />

                <Field
                  name="maxSalary"
                  as={TextField}
                  label="Max Salary"
                  type="number"
                  fullWidth
                  margin="normal"
                  error={touched.maxSalary && !!errors.maxSalary}
                  helperText={touched.maxSalary && errors.maxSalary}
                />
              </div>

              {/* Description */}
              <Field
                name="description"
                as={TextField}
                label="Job Description"
                multiline
                rows={5}
                fullWidth
                margin="normal"
                error={touched.description && !!errors.description}
                helperText={touched.description && errors.description}
              />

              <Button type="submit" variant="contained" className="postjob-btn" fullWidth>
                Post Job
              </Button>

            </Form>
          )}
        </Formik>

      </div>
    </div>
  );
};

export default PostJob;
