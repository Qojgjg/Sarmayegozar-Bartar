import React from "react";
import CustomerStatisticsCover from "../../assets/svg/CustomerStatisticsCover";
import ReceiptDiscount from "../../assets/svg/ReceiptDiscount";
import AddUser from "../../assets/svg/AddUser";
import Ranking from "../../assets/svg/Ranking";

const CustomerStatistics = () => {
  return (
    <>
      <section className="w-full flex justify-center gap-[24px] mt-[95px] mb-[76px] px-[72px]">
        <div>
          <div className="w-[636px] h-[285px] relative bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[30px] pb-[56px]">
            <p className="text-center text-xl font-extrabold text-secondary-bg-color">
              آمار مشتریان <span className="font-light">(۲۰۲۲)</span>
            </p>
            <div className="absolute top-[38px]">
              <CustomerStatisticsCover />
            </div>
            <div className="flex justify-center items-center gap-[24px] mt-[49px] px-[10px]">
              <div className="w-[153px] flex flex-col justify-center items-center">
                <AddUser />
                <div className="text-xl font-bold">+۵۰۰۰</div>
                <div className="text-xs text-[#767D80]">تعداد ثبت نامی ها</div>
              </div>
              <div className="w-[1px] h-[107px] bg-[#ECECEC]" />
              <div className="w-[153px] flex flex-col justify-center items-center">
                <Ranking />
                <div className="text-xl font-bold">+۴۰۳٪</div>
                <div className="text-xs text-[#767D80]">
                  بزرگترین پرداخت سود
                </div>
              </div>
              <div className="w-[1px] h-[107px] bg-[#ECECEC]" />
              <div className="w-[153px] flex flex-col justify-center items-center">
                <ReceiptDiscount />
                <div className="text-xl font-bold">+۴۸۰</div>
                <div className="text-xs text-[#767D80]">مجموع پرداخت سود</div>
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
      <div className="w-full mt-[76px] mb-[64px] px-[72px]">
        <img
          className="w-full"
          src={require("../../assets/img/Benefit-Banner.png")}
          alt="Benefit Banner"
        />
      </div>
    </>
  );
};

export default CustomerStatistics;
