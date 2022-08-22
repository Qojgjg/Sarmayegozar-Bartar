import React from "react";
import BlogCard from "../BlogCard";

const SuggestedBlog = () => {
  return (
    <div className="w-full px-[72px] mt-[69px] mb-[72px]">
      <div className="flex items-center gap-[32px] mb-[34px]">
        <div className="text-secondary-bg-color text-[32px] font-extrabold whitespace-nowrap">
          مطالب <span className="font-light">پیشنهادی</span>
        </div>
        <div className="w-full h-[1px] bg-[#E8E8E8]" />
      </div>
      <div className="flex items-center gap-[24px]">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default SuggestedBlog;
