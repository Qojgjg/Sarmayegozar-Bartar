import React from "react";
import useTitle from "../hooks/useTitle";
import InfoHeader from "../components/aboutus/InfoHeader";
import CreateReasons from "../components/aboutus/CreateReasons";
import CustomerStatisticsDetails from "../components/aboutus/CustomerStatisticsDetails";
import FastLogin from "../components/FastLogin";

const AboutUs = () => {
  useTitle("درباره ما")
  
  return (
    <section className="w-full bg-primary-bg-color">
      <InfoHeader />
      <CreateReasons />
      <CustomerStatisticsDetails />
      <FastLogin />
    </section>
  )
};

export default AboutUs;
