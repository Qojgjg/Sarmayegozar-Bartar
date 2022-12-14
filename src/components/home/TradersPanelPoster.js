import React from "react";

const TradersPanelPoster = () => {
  return (
    <>
      <div className="grid grid-cols-2 items-center px-[72px]">
        <div className="w-full col-span-1">
          <h4 className="text-5xl leading-[70px] mb-[14px] ">
            <p className="font-extrabold">پنل حرفه ای</p>
            <p className="font-light">مخصوص تریدر ها</p>
          </h4>
          <p className="w-[636px] text-[#767d80] text-[19px] leading-[40px] mb-[30px]">
            سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
            بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را به
            تریدرها ارائه میکند.
          </p>
          <button className="w-[237px] h-[62px] bg-primary-btn-color hover:bg-secondary-btn-color text-white transition-all rounded-[10px] px-[60px] py-[11px]">
            ورود به پنل
          </button>
        </div>
        <div className="w-full col-span-1">
          <img
            className="w-full"
            src={require("../../assets/img/Login-dashboard-poster.png")}
            alt="Login-dashboard-poster"
          />
        </div>
      </div>
      <img
        className="w-full mx-auto mt-10"
        src={require("../../assets/img/Support.png")}
        alt="Support"
      />
    </>
  );
};

export default TradersPanelPoster;
