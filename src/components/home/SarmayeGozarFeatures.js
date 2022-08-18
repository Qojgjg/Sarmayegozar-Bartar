import React from "react";
import WalletTick from "../../assets/svg/WalletTick";
import ChartUp from "../../assets/svg/ChartUp";
import SecurityUser from "../../assets/svg/SecurityUser";
import Ticket from "../../assets/svg/Ticket";

const SarmayeGozarFeatures = () => {
  return (
    <section className="w-full text-center text-[19px] font-bold px-[72px] mt-[57px]">
      <h3 className="text-[34px] font-extrabold">ویژگی های متمایز</h3>
      <h4 className="text-[34px] font-light">سرمایه گذار برتر</h4>
      <div className="grid grid-cols-4 mt-[47px]">
        <div className="w-[306px] h-[306px] flex flex-col justify-center items-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)] rounded-[20px] col-span-1">
          <WalletTick />
          <p className="mt-[12px]">شفافیت و اعتبار</p>
          <p>در ترید</p>
        </div>
        <div className="w-[306px] h-[306px] flex flex-col justify-center items-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)] rounded-[20px] col-span-1">
          <ChartUp />
          <p className="mt-[12px]">ترید در برترین</p>
          <p>بروکرهای دنیا</p>
        </div>
        <div className="w-[306px] h-[306px] flex flex-col justify-center items-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)] rounded-[20px] col-span-1">
          <SecurityUser />
          <p className="mt-[12px]">با سابقه ترین پراپ</p>
          <p>تریدینگ خاورمیانه</p>
        </div>
        <div className="w-[306px] h-[306px] flex flex-col justify-center items-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)] rounded-[20px] col-span-1">
          <Ticket />
          <p className="mt-[12px]">سریع ترین سیستم</p>
          <p>پرداخت سود</p>
        </div>
      </div>
    </section>
  );
};

export default SarmayeGozarFeatures;
