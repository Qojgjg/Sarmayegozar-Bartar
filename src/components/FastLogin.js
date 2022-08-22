import React, { useState } from "react";
import SignupCoverTop from "../assets/svg/SignupCoverTop";
import SignupCoverBottom from "../assets/svg/SignupCoverBottom";

const FastLogin = () => {
  const [userData, setUserData] = useState({});
  // console.log(userData);

  return (
    <>
      <SignupCoverTop />
      <section className="w-full h-[377px] bg-secondary-bg-color grid grid-cols-2 items-center gap-[24px] px-[72px]">
        <div className="col-span-1 w-full text-white">
          <h4 className="text-5xl leading-[70px] mb-[14px]">
            <p className="font-extrabold">ثبت نام رایگان</p>
            <p className="font-light">در کمتر از ۳۰ ثانیه!</p>
          </h4>
          <p className="text-[19px] font-medium leading-[40px]">
            سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
            بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را به
            تریدرها ارائه میکند.
          </p>
        </div>
        <div className="col-span-1 w-full bg-white rounded-[20px] space-y-[14px] p-[40px]">
          <input
            type="email"
            placeholder="آدرس ایمیل"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            className="w-full bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px]"
          />
          <input
            type="number"
            placeholder="رمز عبور"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: Number(e.target.value) })
            }
            className="w-full bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px]"
          />
          <div className="float-left">
            <button className="text-[#767D80] rounded-[10px] ml-[30px]">
              <div className="w-[117px]">قبلا عضو شدم</div>
            </button>
            <button className="rounded-[10px] bg-primary-btn-color hover:bg-secondary-btn-color text-white px-[60px] py-[20px]">
              <div className="w-[117px]">ثبت نام</div>
            </button>
          </div>
        </div>
      </section>
      <SignupCoverBottom />
    </>
  );
};

export default FastLogin;
