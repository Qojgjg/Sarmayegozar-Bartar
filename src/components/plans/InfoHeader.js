import React from "react";
import ButtonOfScrollTo from "../../assets/svg/ButtonOfScrollTo";
import DashedBorderPlans from "../../assets/svg/PlansDashedBorder";
import PlansIconFill from "../../assets/svg/PlansIcons";

const InfoHeader = () => {
  return (
    <div className="w-full h-[201px] relative bg-secondary-bg-color px-[72px] mb-[718px]">
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
              <div className="absolute top-[133px] left-[496px]">
              <PlansIconFill
                color="black"
                bgColor="white"
                />
              </div>
                <div className="absolute top-[458.48px] left-[281px]">
                <PlansIconFill />
              </div>
              <div className="absolute top-[458.48px] left-[711px]">
                <PlansIconFill />
              </div>
              <div className="absolute top-[458.48px] left-[496px]">
              <PlansIconFill/>
              </div>
                <div className="absolute top-[133px] left-[281px]">
                <PlansIconFill />
              </div>
              <p className="w-[440.57px] absolute font-bold text-black text-[18px] leading-[40px] top-[259.70px] left-[317.71px]">
              پایین ترین اهداف در بازار!
              </p>
              <p className="absolute w-[490px] h-[140px] top-[291px] left-[293px] leading-[35px] text-[14px] font-medium text-[#767D80]">
                سرمایه گذار برتر در راستای تامین سرمایه معامله گران
                برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را به تریدرها ارائه میکند
                سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه.
              </p>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[615px]">
            <ButtonOfScrollTo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoHeader
