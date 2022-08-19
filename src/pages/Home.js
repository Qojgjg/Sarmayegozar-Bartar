import React from "react";
import Header from "../components/home/Header";
import SarmayeGozarFeatures from "../components/home/SarmayeGozarFeatures";
import AboutCompony from "../components/home/AboutCompony";
import SarmayegozarPlan from "../components/home/SarmayegozarPlan";
import CustomerStatistics from "../components/home/CustomerStatistics";
import PopularPlatforms from "../components/home/PopularPlatforms";
import TradersPanelPoster from "../components/home/TradersPanelPoster";
import PopularQuestions from "../components/home/PopularQuestions";
import StepsToWorkSite from "../components/home/StepsToWorkSite";
import FastLogin from "../components/FastLogin";
import BlogContent from "../components/home/BlogContent";

const Home = () => {
  return (
    <div className="w-full bg-primary-bg-color">
      <Header />
      <SarmayeGozarFeatures />
      <AboutCompony />
      <SarmayegozarPlan />
      <CustomerStatistics />
      <PopularPlatforms />
      <TradersPanelPoster />
      <PopularQuestions />
      <StepsToWorkSite />
      <FastLogin />
      <BlogContent />
    </div>
  );
};

export default Home;
