import React from "react";
import { Link } from "react-router-dom";

const BlogContent = () => {
  return (
    <>
      <section className="w-full mt-[72px] px-[72px]">
        <div className="flex justify-between items-center gap-[40px] mb-[63px]">
          <p className="text-[34px] font-extrabold whitespace-nowrap">
            مطالب <span className="font-light">بلاگ</span>
          </p>
          <div className="w-full h-[1px] bg-[#E8E8E8]" />
          <button className="text-[#C7C7C7] border rounded-[10px] whitespace-nowrap px-[30px] py-[18px]">
            مطالب بیشتر
          </button>
        </div>
        <div className="grid grid-cols-4 gap-[24px]">
          <div className="col-span-1 w-full bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[15px]">
            <img
              className="w-full rounded-[20px]"
              src={require("../../assets/img/BlogImage.png")}
              alt="Blog Image"
            />
            <p className="text-secondary-bg-color font-extrabold mt-[21px] mb-[15px]">
              تریدر ها در سال چقدر سود میکنند؟
            </p>
            <p className="text-[#767D80] text-sm font-medium leading-[27px]">
              لورم ایپسوم متن ساختگی با تولید ســادگی در نامفهوم از صنعت چاپ ، و
              با استفاده از طراحان گرافیک است ، چاپگـرها و متون بلکــه روزنامه و
              مجــله در ستون و سطـرآنچنان که لازم است ، و برای شرایط
              فعلیتکنولوژی مورد نیاز،و همین یک کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشد...
            </p>
            <div className="w-full h-[1px] bg-[#ECECEC] my-[15px]" />
            <Link
              to={"/"}
              className="flex justify-center text-primary-btn-color text-sm font-extrabold"
            >
              ادامه مطلب
            </Link>
          </div>
          <div className="col-span-1 w-full bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[15px]">
            <img
              className="w-full rounded-[20px]"
              src={require("../../assets/img/BlogImage.png")}
              alt="Blog Image"
            />
            <p className="text-secondary-bg-color font-extrabold mt-[21px] mb-[15px]">
              تریدر ها در سال چقدر سود میکنند؟
            </p>
            <p className="text-[#767D80] text-sm font-medium leading-[27px]">
              لورم ایپسوم متن ساختگی با تولید ســادگی در نامفهوم از صنعت چاپ ، و
              با استفاده از طراحان گرافیک است ، چاپگـرها و متون بلکــه روزنامه و
              مجــله در ستون و سطـرآنچنان که لازم است ، و برای شرایط
              فعلیتکنولوژی مورد نیاز،و همین یک کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشد...
            </p>
            <div className="w-full h-[1px] bg-[#ECECEC] my-[15px]" />
            <Link
              to={"/"}
              className="flex justify-center text-primary-btn-color text-sm font-extrabold"
            >
              ادامه مطلب
            </Link>
          </div>
          <div className="col-span-1 w-full bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[15px]">
            <img
              className="w-full rounded-[20px]"
              src={require("../../assets/img/BlogImage.png")}
              alt="Blog Image"
            />
            <p className="text-secondary-bg-color font-extrabold mt-[21px] mb-[15px]">
              تریدر ها در سال چقدر سود میکنند؟
            </p>
            <p className="text-[#767D80] text-sm font-medium leading-[27px]">
              لورم ایپسوم متن ساختگی با تولید ســادگی در نامفهوم از صنعت چاپ ، و
              با استفاده از طراحان گرافیک است ، چاپگـرها و متون بلکــه روزنامه و
              مجــله در ستون و سطـرآنچنان که لازم است ، و برای شرایط
              فعلیتکنولوژی مورد نیاز،و همین یک کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشد...
            </p>
            <div className="w-full h-[1px] bg-[#ECECEC] my-[15px]" />
            <Link
              to={"/"}
              className="flex justify-center text-primary-btn-color text-sm font-extrabold"
            >
              ادامه مطلب
            </Link>
          </div>
          <div className="col-span-1 w-full bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[15px]">
            <img
              className="w-full rounded-[20px]"
              src={require("../../assets/img/BlogImage.png")}
              alt="Blog Image"
            />
            <p className="text-secondary-bg-color font-extrabold mt-[21px] mb-[15px]">
              تریدر ها در سال چقدر سود میکنند؟
            </p>
            <p className="text-[#767D80] text-sm font-medium leading-[27px]">
              لورم ایپسوم متن ساختگی با تولید ســادگی در نامفهوم از صنعت چاپ ، و
              با استفاده از طراحان گرافیک است ، چاپگـرها و متون بلکــه روزنامه و
              مجــله در ستون و سطـرآنچنان که لازم است ، و برای شرایط
              فعلیتکنولوژی مورد نیاز،و همین یک کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشد...
            </p>
            <div className="w-full h-[1px] bg-[#ECECEC] my-[15px]" />
            <Link
              to={"/"}
              className="flex justify-center text-primary-btn-color text-sm font-extrabold"
            >
              ادامه مطلب
            </Link>
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
