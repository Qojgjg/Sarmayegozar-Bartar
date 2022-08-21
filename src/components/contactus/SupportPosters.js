import React from "react";

const SupportPosters = () => {
  return (
    <div className="w-full px-[72px]">
      <div className="w-full bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[40px] pb-[80px] mb-[38px]">
        <div className="text-center text-secondary-bg-color text-[22px] font-light mb-[30px]">
          پشتیبانان <span className="font-extrabold">تلگرام</span> سرمایه گذار
          برتر
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[354px] h-[58px] bg-gradient-to-l from-[rgba(236,236,236,1)] to-[rgba(236,236,236,0)] rounded-[10px] p-[1px]">
            <div className="w-full h-full flex items-center bg-white rounded-[10px] px-[19px] py-[17px] gap-[14px]">
              <span className="text-primary-btn-color text-sm font-extrabold">پشتیبان شماره ۱</span>
              <span className="text-[#BBBBBB] text-xs font-bold">SGB_TECHNICALSUPPORT@</span>
              <div className="w-[52px] h-[50px] flex flex-col justify-center bg-primary-btn-color rounded-[10px]">
                <img className="w-[24px] mx-auto" src={require("../../assets/img/Telegram.png")} alt="Telegram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPosters;
