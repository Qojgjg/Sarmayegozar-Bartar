import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/blogs/1")}
      className="w-full bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[15px] cursor-pointer relative hover:bottom-[20px] card-anime"
    >
      <img
        className="w-full rounded-[10px]"
        src={require("../assets/img/BlogImage.png")}
        alt="Blog Image"
      />
      <p className="text-secondary-bg-color font-extrabold mt-[21px] mb-[15px]">
        تریدر ها در سال چقدر سود میکنند؟
      </p>
      <p className="text-[#767D80] text-sm font-medium leading-[27px]">
        لورم ایپسوم متن ساختگی با تولید ســادگی در نامفهوم از صنعت چاپ ، و با
        استفاده از طراحان گرافیک است ، چاپگـرها و متون بلکــه روزنامه و مجــله
        در ستون و سطـرآنچنان که لازم است ، و برای شرایط فعلیتکنولوژی مورد نیاز،و
        همین یک کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد...
      </p>
      <div className="w-full h-[1px] bg-[#ECECEC] my-[15px]" />
      <Link
        to={"/blogs/1"}
        className="flex justify-center text-primary-btn-color text-sm font-extrabold"
      >
        ادامه مطلب
      </Link>
    </div>
  );
};

export default BlogCard;
