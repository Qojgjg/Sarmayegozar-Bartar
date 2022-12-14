import React from "react";
import { useNavigate } from "react-router-dom";

const AboutCompony = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 mt-[90px] px-[72px]">
      <div className="col-span-1">
        <img
          src={require("../../assets/img/AboutCompony.png")}
          alt="About Compony Poster"
        />
      </div>
      <div className="col-span-1 flex flex-col justify-center items-start">
        <h4 className="leading-[80px] mb-3">
          <p className="text-5xl font-extrabold">درباره شرکت</p>
          <p className="text-[39px] font-light">سرمایه گذار برتر</p>
        </h4>
        <p className="text-[#767d80] leading-[40px] font-medium">
          سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
          بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را به
          تریدرها ارائه میکند.
        </p>
        <button
          onClick={() => navigate("/aboutus")}
          className="h-[62px] text-white bg-primary-btn-color hover:bg-secondary-btn-color transition-all rounded-[10px] py-[11px] px-[60px] mt-[30px]"
        >
          بیشتر بخوانید
        </button>
      </div>
    </div>
  );
};

export default AboutCompony;
