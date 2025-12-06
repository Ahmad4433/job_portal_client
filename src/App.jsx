import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Jobs from "./components/jobs/Jobs";
import JobDetail from "./components/jobs/JobDetail";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PostJob from "./components/jobs/PostJob";
import EmployerDashboard from "./components/employerDashboard/EmployerDashboard";
import Applicants from "./components/applicants/Applicants";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/employ-job-dashboard" element={<EmployerDashboard/>} />
      <Route path="/applicant" element={<Applicants/>} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/detail" element={<JobDetail />} />
        <Route path="/post-job" element={<PostJob/>} />
      </Route>
    </Routes>
  );
};

export default App;
