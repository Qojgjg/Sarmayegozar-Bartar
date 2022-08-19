import React from "react";
import BlogCard from "../BlogCard";
import ReactPaginate from "react-paginate";
import LeftSliderArrow from "../../assets/svg/LeftSliderArrow";
import RightSliderArrow from "../../assets/svg/RightSliderArrow";

const CategoryBlogs = () => {
  return (
    <>
      <section className="grid grid-cols-4 gap-[24px] px-[72px]">
        <div className="w-full col-span-1">
          <BlogCard />
        </div>
        <div className="w-full col-span-1">
          <BlogCard />
        </div>
        <div className="w-full col-span-1">
          <BlogCard />
        </div>
        <div className="w-full col-span-1">
          <BlogCard />
        </div>
        <div className="w-full col-span-1">
          <BlogCard />
        </div>
        <div className="w-full col-span-1">
          <BlogCard />
        </div>
        <div className="w-full col-span-1">
          <BlogCard />
        </div>
        <div className="w-full col-span-1">
          <BlogCard />
        </div>
      </section>
      <>
        <ReactPaginate
          previousLabel={<RightSliderArrow color="#C3C3C3" />}
          nextLabel={<LeftSliderArrow color="#C3C3C3" />}
          pageCount={999}
          // onPageChange={pageClick}
          containerClassName="flex justify-center items-center text-[#C3C3C3] font-bold gap-[40px] mt-[79px] mb-[106px]"
          pageClassName="hover:text-primary-btn-color transition duration-[300ms]"
          nextClassName=""
          previousClassName=""
          breakClassName="hover:text-primary-btn-color"
        />
      </>
    </>
  );
};

export default CategoryBlogs
