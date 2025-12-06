import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import FeaturedJobs from "./FeaturedJobs";
import TopCompanies from "./TopCompanies";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedJobs />
      <TopCompanies />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
