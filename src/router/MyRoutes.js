import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Plans from "../pages/Plans";
import Rules from "../pages/Rules";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Blogs from "../pages/Blogs";
import LeaderBord from "../pages/LeaderBord";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/leaderbord" element={<LeaderBord />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes
