import React from "react";
import InputSearchIcon from "../../assets/svg/InputSearchIcon";

const RulesSearchHeader = () => {
  return (
    <>
      <div className="w-full h-[169px] relative bg-secondary-bg-color mb-[68px] px-[72px]">
        <div className="w-full h-[1px] bg-[#495156]" />
        <div className="text-center mt-[40px]">
          <h3 className="text-white text-[32px] font-extrabold">
            قوانین و مقررات <span className="font-light">سایت</span>
          </h3>
          <p className="text-[rgba(255,255,255,0.7)] text-sm font-medium leading-[40px]">
            پیش از ثبت نام در سایت و استفاده از پلتفرم باید این قوانین قوانین
            مطالعه شود...
          </p>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-[140px]">
          <div className="relative">
            <input
              className="w-[636px] h-[58px] rounded-[10px] px-[25px] pl-[65px] py-[4px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)]"
              placeholder="جستجو کلمه کلیدی در میان قوانین و مقررات..."
              type="text"
            />
            <div className="absolute top-[-0.5%] left-[-1.5%]">
              <InputSearchIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1030px] text-center mx-auto text-[#767D80] text-sm font-bold leading-[35px] mb-[50px]">
        <p>
          تریدر باید دو مرحله در اکانت دمو ترید کند و بدون نقض قوانین به تارگت
          های پیش رو برسد.
        </p>
        <p>
          پس از تکمیل سفارش، معامله گران در چلنج شرکت خواهند کرد. تریدر باید در
          حساب های Demo، با رعایت قوانین، به تارگت مراحل برسد.
        </p>
      </div>
    </>
  );
};

export default RulesSearchHeader;
