import React, { useState } from "react";
import useTitle from "../hooks/useTitle";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Google from "../assets/svg/Google";

const Login = () => {
  useTitle("ورود")
  const [userData, setUserData] = useState({});
  // console.log(userData)

  return (
    <>
      <Navbar />
      <div className="w-full bg-primary-bg-color">
        <div className="w-full h-[248px] relative bg-secondary-bg-color mb-[463px] px-[72px]">
          <div className="w-full h-[1px] bg-[#495156]" />
          <h2 className="text-center text-white text-[32px] font-extrabold mt-[40px]">
            ورود یا ایجاد حساب کاربری
          </h2>
          <div className="w-[636px] absolute top-[136px] left-1/2 -translate-x-1/2 bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] space-y-[30px] p-[60px]">
            <div className="w-full flex justify-center items-center bg-[#F9F9F9] rounded-[10px] gap-[12px] py-[15px]">
              <Google />
              <span className="text-[#B1B1B1] text-sm font-medium">
                ورود یا ثبت نام از طریق گوگل
              </span>
            </div>
            <div className="w-full h-[1px] bg-[#E0E0E0]" />
            <div className="space-y-[30px]">
              <input
                type="email"
                placeholder="آدرس ایمیل"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px]"
              />
              <input
                type="email"
                placeholder="رمز عبور"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px]"
              />
            </div>
            <button className="w-full h-[56px] bg-primary-btn-color text-white text-sm font-medium hover:bg-secondary-btn-color transition-all rounded-[10px] py-[15px]">
              ورود به پنل کاربری
            </button>
            <div className="text-center text-primary-btn-color text-sm font-medium">
              <Link to={"/login-phone"}>
                ورود با شماره موبایل و رمز عبور یکبار مصرف
              </Link>
            </div>
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
