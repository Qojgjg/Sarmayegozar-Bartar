import React from "react";
import ButtonOfScrollTo from "../../assets/svg/ButtonOfScrollTo";
import DashedBorderPlans from "../../assets/svg/DashedBorderPlans";
import PlansIconFill from "../../assets/svg/PlansIconFill";

const InfoHeader = () => {
  return (
    <div className="w-full h-[201px] relative bg-secondary-bg-color px-[72px]">
      <div className="w-full h-[1px] bg-[#495156]" />
      <div className="text-center mt-[40px]">
        <h3 className="text-white text-[32px] font-extrabold">
        پلن های سرمایه گذار برتر
        </h3>
        <p className="text-[rgba(255,255,255,0.7)] text-sm font-medium leading-[40px]">
        ما هیچ محدودیتی برای اندازه ای که شما معامله می کنید تعیین نمی کنیم
        </p>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[161px] ">
        <div className="relative">
          <div className="w-[1076px] h-[640px]  text-center bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[40px]">
            <p className="text-black text-2xl leading-[50px] mb-[85px] font-light">
            مزایای پلن های سرمایه گذار برتر
            </p>
            <div className=" w-[788px] h-[326px] m-auto">
              <DashedBorderPlans />
              <div className="absolute top-[133px] left-[711px]">
                <PlansIconFill />
              </div>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-23%]">
            <ButtonOfScrollTo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoHeader
