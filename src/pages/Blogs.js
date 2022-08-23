import React from "react";
import useTitle from "../hooks/useTitle";
import SearchHeader from "../components/Blogs/SearchHeader";
import ContentCategory from "../components/Blogs/ContentCategory";
import CategoryBlogs from "../components/Blogs/CategoryBlogs";
import FastLogin from "../components/FastLogin";

const Blogs = () => {
  useTitle("بلاگ ها")
  
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
