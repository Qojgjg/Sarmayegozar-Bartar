import React from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../BlogCard";

const BlogContent = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="w-full mt-[72px] px-[72px]">
        <div className="flex justify-between items-center gap-[40px] mb-[63px]">
          <p className="text-[34px] font-extrabold whitespace-nowrap">
            مطالب <span className="font-light">بلاگ</span>
          </p>
          <div className="w-full h-[1px] bg-[#E8E8E8]" />
          <button
            onClick={() => navigate("/blogs")}
            className="text-[#C7C7C7] border hover:text-primary-btn-color hover:border-primary-btn-color transition-all rounded-[10px] whitespace-nowrap px-[30px] py-[18px]"
          >
            مطالب بیشتر
          </button>
        </div>
        <div className="grid grid-cols-4 gap-[24px]">
          <div className="col-span-1">
            <BlogCard />
          </div>
          <div className="col-span-1">
            <BlogCard />
          </div>
          <div className="col-span-1">
            <BlogCard />
          </div>
          <div className="col-span-1">
            <BlogCard />
          </div>
        </div>
      </section>
      <div className="w-full mt-[85px] px-[72px]">
        <div className="w-full h-[1px] bg-[#E2E2E2]" />
      </div>
    </>
  );
};

export default BlogContent;
