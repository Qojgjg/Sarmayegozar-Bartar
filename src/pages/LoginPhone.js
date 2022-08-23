import React, { useState } from "react";
import useTitle from "../hooks/useTitle";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Google from "../assets/svg/Google";

const Login = () => {
  useTitle("ورود")
  const [phone, setPhone] = useState("");
  const [isCodePage, setIsCodePage] = useState(false);
  const [codeNumber, setCodeNumber] = useState("");

  // console.log(phone)
  // console.log(codeNumber)

  return (
    <>
      <Navbar />
      <div className="w-full bg-primary-bg-color">
        <div
          className={`w-full h-[248px] relative bg-secondary-bg-color px-[72px] ${
            isCodePage ? "mb-[253px]" : "mb-[370px]"
          }`}
        >
          <div className="w-full h-[1px] bg-[#495156]" />
          <h2 className="text-center text-white text-[32px] font-extrabold mt-[40px]">
            ورود یا ایجاد حساب کاربری
          </h2>
          <div className="w-[636px] absolute top-[136px] left-1/2 -translate-x-1/2 bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] space-y-[30px] p-[60px]">
            {isCodePage ? (
              <>
                <input
                  type="phone"
                  placeholder="کد ۴ رقمی ارسال شده به شماره موبایل خود را وارد نمایید"
                  value={codeNumber}
                  onChange={(e) => setCodeNumber(e.target.value)}
                  className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px]"
                />
                <button
                  onClick={() => setIsCodePage(true)}
                  className="w-full h-[56px] bg-primary-btn-color text-white text-sm font-medium hover:bg-secondary-btn-color transition-all rounded-[10px] py-[15px]"
                >
                  ارسال مجدد رمز عبور یکبار مصرف
                </button>
                <div
                  onClick={() => setIsCodePage(false)}
                  className="text-center text-primary-btn-color text-sm font-medium cursor-pointer"
                >
                  ویرایش شماره موبایل
                </div>
              </>
            ) : (
              <>
                <div className="w-full flex justify-center items-center bg-[#F9F9F9] rounded-[10px] gap-[12px] py-[15px]">
                  <Google />
                  <span className="text-[#B1B1B1] text-sm font-medium">
                    ورود یا ثبت نام از طریق گوگل
                  </span>
                </div>
                <div className="w-full h-[1px] bg-[#E0E0E0]" />
                <input
                  type="number"
                  placeholder="برای ورود یا ثبت نام شماره موبایل خود را وارد کنید"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px]"
                />
                <button
                  onClick={() => setIsCodePage(true)}
                  className="w-full h-[56px] bg-primary-btn-color text-white text-sm font-medium hover:bg-secondary-btn-color transition-all rounded-[10px] py-[15px]"
                >
                  ارسال رمز عبور یکبار مصرف
                </button>
                <div className="text-center text-primary-btn-color text-sm font-medium">
                  <Link to={"/login"}>ورود از طریق ایمیل و رمز عبور</Link>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="text-center">
          <button className="w-[636px] h-[56px] bg-[#1B262C] text-white text-sm font-medium rounded-[10px] py-[15px] mb-[97px]">
            ورود به پنل تریدینگ
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
