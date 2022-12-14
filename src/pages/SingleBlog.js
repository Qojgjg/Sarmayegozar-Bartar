import React from "react";
import useTitle from "../hooks/useTitle";
import TitleInfo from "../components/singleblog/TitleInfo";
import BlogContent from "../components/singleblog/BlogContent";
import SuggestedBlog from "../components/singleblog/SuggestedBlog";
import FastLogin from "../components/FastLogin";

const SingleBlog = () => {
  useTitle("بلاگ")
  
  return (
    <section className="w-full bg-primary-bg-color">
      <TitleInfo />
      <BlogContent />
      <SuggestedBlog />
      <FastLogin />
    </section>
  );
};

export default SingleBlog
