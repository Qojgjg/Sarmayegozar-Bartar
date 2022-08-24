import React from "react";
import WalletTick from "../../assets/svg/WalletTick";
import ChartUp from "../../assets/svg/ChartUp";
import SecurityUser from "../../assets/svg/SecurityUser";
import Ticket from "../../assets/svg/Ticket";
import CardShadow from "../../assets/svg/CardShadow";

const SarmayeGozarFeatures = () => {
  return (
    <section className="w-full text-center text-[19px] font-bold px-[72px] mt-[57px]">
      <h3 className="text-[34px] font-extrabold">ویژگی های متمایز</h3>
      <h4 className="text-[34px] font-light">سرمایه گذار برتر</h4>
      <div className="grid grid-cols-4 text-[19px] font-medium mt-[47px]">
        <div className="w-[306px] h-[306px] col-span-1 flex flex-col justify-center items-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)] hover:shadow-[0px_30px_40px_rgba(0,0,0,0.08)] relative rounded-[20px] card-anime">
          <WalletTick />
          <p className="mt-[12px]">شفافیت و اعتبار</p>
          <p>در ترید</p>
        </div>
        <div className="w-[306px] h-[306px] col-span-1 flex flex-col justify-center items-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)] hover:shadow-[0px_30px_40px_rgba(0,0,0,0.08)] relative hover:bottom-[20px] rounded-[20px] card-anime">
          <ChartUp />
          <p className="mt-[12px]">ترید در برترین</p>
          <p>بروکرهای دنیا</p>
        </div>
        <div className="w-[306px] h-[306px] col-span-1 flex flex-col justify-center items-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)] hover:shadow-[0px_30px_40px_rgba(0,0,0,0.08)] relative hover:bottom-[20px] rounded-[20px] card-anime">
          <SecurityUser />
          <p className="mt-[12px]">با سابقه ترین پراپ</p>
          <p>تریدینگ خاورمیانه</p>
        </div>
        <div className="w-[306px] h-[306px] col-span-1 flex flex-col justify-center items-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)] hover:shadow-[0px_30px_40px_rgba(0,0,0,0.08)] relative hover:bottom-[20px] rounded-[20px] card-anime">
          <Ticket />
          <p className="mt-[12px]">سریع ترین سیستم</p>
          <p>پرداخت سود</p>
        </div>
      </div>
    </section>
  );
};

export default SarmayeGozarFeatures;
