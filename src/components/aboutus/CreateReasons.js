import React, { useState } from "react";
import EmptyWalletTick from "../../assets/svg/EmptyWalletTick";
import CardSlash from "../../assets/svg/CardSlash";
import InternetGlobalRefresh from "../../assets/svg/InternetGlobalRefresh";
import ArrowTop from "../../assets/svg/ArrowTop";
import ArrowDown from "../../assets/svg/ArrowDown";

const CreateReasons = () => {
  const [isRulesOpen, setIsRulesOpen] = useState({
    ruleOne: false,
    ruleTwo: false,
  });

  return (
    <div className="w-full mt-[290px] px-[72px]">
      <h3 className="text-secondary-bg-color text-center text-[34px] leading-[50px] pb-[48px]">
        <p className="font-extrabold">دلایل تشکیل</p>
        <p className="font-light">سرمایه گذار برتر</p>
      </h3>
      <div className="grid grid-cols-3 text-center text-secondary-bg-color text-[19px] leading-[40px] font-bold pb-[82px]">
        <div className="col-span-1 flex flex-col justify-center items-center border-l">
          <EmptyWalletTick />
          <div className="w-[269px] mt-[12px]">
            تامین سرمایه معامله گران فعال در بازار سرمایه
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center border-l">
          <CardSlash />
          <div className="w-[269px] mt-[12px]">
            تامین سرمایه معامله گران فعال در بازار سرمایه
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center">
          <InternetGlobalRefresh />
          <div className="w-[269px] mt-[12px]">
            تامین سرمایه معامله گران فعال در بازار سرمایه
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mb-[24px] px-[40px] py-[35px]">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() =>
            setIsRulesOpen({ ...isRulesOpen, ruleOne: !isRulesOpen.ruleOne })
          }
        >
          <p className="text-[#0F4C75] text-xl font-extrabold">
            حداکثر میزان دریافت سرمایه از سرمایه گذار برتر
          </p>
          {isRulesOpen.ruleOne ? <ArrowDown /> : <ArrowTop />}
        </div>
        {isRulesOpen.ruleOne ? (
          <div className="text-[#767D80] font-medium leading-[35px] border-t mt-[20px] pt-[20px]">
            سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
            بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را به
            تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه معامله
            گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه معامله گران
            برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه
            خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین
            سرمایه معامله گران برای ترید.
          </div>
        ) : null}
      </div>
      <div className="w-full bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[40px] py-[35px]">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() =>
            setIsRulesOpen({ ...isRulesOpen, ruleTwo: !isRulesOpen.ruleTwo })
          }
        >
          <p className="text-[#0F4C75] text-xl font-extrabold">
            سرمایه گذار برتر خدمات خود را چگونه ارائه میکند؟
          </p>
          {isRulesOpen.ruleTwo ? <ArrowDown /> : <ArrowTop />}
        </div>
        {isRulesOpen.ruleTwo ? (
          <div className="text-[#767D80] font-medium leading-[35px] border-t mt-[20px] pt-[20px]">
            سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
            بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را به
            تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه معامله
            گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه معامله گران
            برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه
            خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین
            سرمایه معامله گران برای ترید.
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CreateReasons
