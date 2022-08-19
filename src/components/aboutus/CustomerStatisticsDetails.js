import React from "react";
import CustomerStatisticsCover from "../../assets/svg/CustomerStatisticsCover";
import AddUser from "../../assets/svg/AddUser";
import Ranking from "../../assets/svg/Ranking";
import UserInOctagon from "../../assets/svg/UserInOctagon";
import LampCharge from "../../assets/svg/LampCharge";

const CustomerStatisticsDetails = () => {
  return (
    <section className="w-full flex justify-center gap-[24px] mt-[95px] mb-[50px] px-[72px]">
      <div>
        <div className="w-[636px] h-[285px] relative bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[30px] pb-[56px]">
          <p className="text-center text-xl font-extrabold text-secondary-bg-color">
            آمار مشتریان <span className="font-light">(۲۰۲۲)</span>
          </p>
          <div className="absolute top-[38px]">
            <CustomerStatisticsCover />
          </div>
          <div className="grid grid-cols-4 justify-center items-center mt-[49px] px-[10px]">
            <div className="w-full flex flex-col justify-center items-center border-l">
              <AddUser />
              <div className="text-xl font-bold">+۵۰۰۰</div>
              <div className="text-xs text-[#767D80]">تعداد ثبت نامی ها</div>
            </div>
            <div className="w-full flex flex-col justify-center items-center border-l">
              <Ranking />
              <div className="text-xl font-bold">+۴۰۳٪</div>
              <div className="text-xs text-[#767D80]">پیشرفت در فصل اخیر</div>
            </div>
            <div className="w-full flex flex-col justify-center items-center border-l">
              <LampCharge />
              <div className="text-xl font-bold">۹.۵۳٪</div>
              <div className="text-xs text-[#767D80]">
                درصد موفقیت <span className="text-[10px]">(لایو ترید)</span>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <UserInOctagon />
              <div className="text-xl font-bold">+۴۸۰</div>
              <div className="text-xs text-[#767D80]">اکانت ریل</div>
            </div>
          </div>
        </div>
        <button className="w-full bg-primary-btn-color text-primary-bg-color hover:bg-secondary-btn-color transition-all rounded-[10px] mt-[24px] px-[60px] py-[11px]">
          همین حالا به مشتریان ما بپیوندید
        </button>
      </div>
      <div className="w-[636px] h-[371px] bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
        video
      </div>
    </section>
  );
};

export default CustomerStatisticsDetails;
