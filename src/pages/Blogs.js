import React from "react";
import SearchHeader from "../components/Blogs/SearchHeader";
import ContentCategory from "../components/Blogs/ContentCategory";
import CategoryBlogs from "../components/Blogs/CategoryBlogs";
import FastLogin from "../components/FastLogin";

const Blogs = () => {
  return (
    <section className="w-full bg-primary-bg-color">
      <SearchHeader />
      <ContentCategory />
      <CategoryBlogs />
      <FastLogin />
    </section>
  );
};

export default Blogs;
