import React, { useState } from "react";
import ArrowTop from "../../assets/svg/ArrowTop";
import ArrowDown from "../../assets/svg/ArrowDown";

const FullRulesReview = () => {
  const [isRulesOpen, setIsRulesOpen] = useState({
    ruleOne: false,
    ruleTwo: false,
    ruleThree: false,
    ruleFour: false,
    ruleFive: false,
    ruleSix: false,
    ruleSeven: false,
    ruleEight: false,
    ruleNine: false,
    ruleTen: false,
  });

  return (
    <section className="w-full px-[72px] mb-[127px]">
      <div className="flex items-center gap-[32px] mb-[35px]">
        <div className="text-lg font-extrabold whitespace-nowrap">
          دسته بندی مطالب
        </div>
        <div className="w-full h-[1px] bg-[#E8E8E8]" />
      </div>
      <div className="flex justify-between items-center gap-[20px] mb-[59px]">
        <button className="text-[#C7C7C7] font-bold text-sm hover:text-primary-btn-color hover:border-primary-btn-color transition-all border rounded-[10px] px-[30px] py-[18px]">
          قوانین پرداخت ها
        </button>
        <button className="text-[#C7C7C7] font-bold text-sm hover:text-primary-btn-color hover:border-primary-btn-color transition-all border rounded-[10px] px-[30px] py-[18px]">
          قوانین موارد غیر مجاز
        </button>
        <button className="text-[#C7C7C7] font-bold text-sm hover:text-primary-btn-color hover:border-primary-btn-color transition-all border rounded-[10px] px-[30px] py-[18px]">
          قوانین تقلب
        </button>
        <button className="text-[#C7C7C7] font-bold text-sm hover:text-primary-btn-color hover:border-primary-btn-color transition-all border rounded-[10px] px-[30px] py-[18px]">
          قوانین رشد سرمایه
        </button>
        <button className="text-[#C7C7C7] font-bold text-sm hover:text-primary-btn-color hover:border-primary-btn-color transition-all border rounded-[10px] px-[30px] py-[18px]">
          قوانین اینسترومنت ها
        </button>
        <button className="text-[#C7C7C7] font-bold text-sm hover:text-primary-btn-color hover:border-primary-btn-color transition-all border rounded-[10px] px-[30px] py-[18px]">
          قوانین موارد غیر مجاز
        </button>
        <button className="text-[#C7C7C7] font-bold text-sm hover:text-primary-btn-color hover:border-primary-btn-color transition-all border rounded-[10px] px-[30px] py-[18px]">
          قوانین تقلب
        </button>
      </div>
      <div className="grid grid-cols-2 items-start gap-[24px]">
        <div className="w-full col-span-1 bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mb-[24px] px-[40px] py-[35px]">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setIsRulesOpen({ ...isRulesOpen, ruleOne: !isRulesOpen.ruleOne })
            }
          >
            <p className="text-secondary-bg-color text-xl font-extrabold">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </p>
            {isRulesOpen.ruleOne ? <ArrowDown /> : <ArrowTop />}
          </div>
          {isRulesOpen.ruleOne ? (
            <div className="text-[#767D80] font-medium leading-[35px] border-t mt-[20px] pt-[20px]">
              سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
              بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را
              به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل
              شده و در این راه خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر
              در راستای تامین سرمایه معامله گران برای ترید.
            </div>
          ) : null}
        </div>
        <div className="w-full col-span-1 bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mb-[24px] px-[40px] py-[35px]">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setIsRulesOpen({ ...isRulesOpen, ruleTwo: !isRulesOpen.ruleTwo })
            }
          >
            <p className="text-secondary-bg-color text-xl font-extrabold">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </p>
            {isRulesOpen.ruleTwo ? <ArrowDown /> : <ArrowTop />}
          </div>
          {isRulesOpen.ruleTwo ? (
            <div className="text-[#767D80] font-medium leading-[35px] border-t mt-[20px] pt-[20px]">
              سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
              بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را
              به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل
              شده و در این راه خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر
              در راستای تامین سرمایه معامله گران برای ترید.
            </div>
          ) : null}
        </div>
        <div className="w-full col-span-1 bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mb-[24px] px-[40px] py-[35px]">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setIsRulesOpen({
                ...isRulesOpen,
                ruleThree: !isRulesOpen.ruleThree,
              })
            }
          >
            <p className="text-secondary-bg-color text-xl font-extrabold">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </p>
            {isRulesOpen.ruleThree ? <ArrowDown /> : <ArrowTop />}
          </div>
          {isRulesOpen.ruleThree ? (
            <div className="text-[#767D80] font-medium leading-[35px] border-t mt-[20px] pt-[20px]">
              سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
              بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را
              به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل
              شده و در این راه خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر
              در راستای تامین سرمایه معامله گران برای ترید.
            </div>
          ) : null}
        </div>
        <div className="w-full col-span-1 bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mb-[24px] px-[40px] py-[35px]">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setIsRulesOpen({
                ...isRulesOpen,
                ruleFour: !isRulesOpen.ruleFour,
              })
            }
          >
            <p className="text-secondary-bg-color text-xl font-extrabold">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </p>
            {isRulesOpen.ruleFour ? <ArrowDown /> : <ArrowTop />}
          </div>
          {isRulesOpen.ruleFour ? (
            <div className="text-[#767D80] font-medium leading-[35px] border-t mt-[20px] pt-[20px]">
              سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
              بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را
              به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل
              شده و در این راه خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر
              در راستای تامین سرمایه معامله گران برای ترید.
            </div>
          ) : null}
        </div>
        <div className="w-full col-span-1 bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mb-[24px] px-[40px] py-[35px]">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setIsRulesOpen({
                ...isRulesOpen,
                ruleFive: !isRulesOpen.ruleFive,
              })
            }
          >
            <p className="text-secondary-bg-color text-xl font-extrabold">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </p>
            {isRulesOpen.ruleFive ? <ArrowDown /> : <ArrowTop />}
          </div>
          {isRulesOpen.ruleFive ? (
            <div className="text-[#767D80] font-medium leading-[35px] border-t mt-[20px] pt-[20px]">
              سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
              بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را
              به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل
              شده و در این راه خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر
              در راستای تامین سرمایه معامله گران برای ترید.
            </div>
          ) : null}
        </div>
        <div className="w-full col-span-1 bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mb-[24px] px-[40px] py-[35px]">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setIsRulesOpen({
                ...isRulesOpen,
                ruleSix: !isRulesOpen.ruleSix,
              })
            }
          >
            <p className="text-secondary-bg-color text-xl font-extrabold">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </p>
            {isRulesOpen.ruleSix ? <ArrowDown /> : <ArrowTop />}
          </div>
          {isRulesOpen.ruleSix ? (
            <div className="text-[#767D80] font-medium leading-[35px] border-t mt-[20px] pt-[20px]">
              سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
              بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را
              به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل
              شده و در این راه خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر
              در راستای تامین سرمایه معامله گران برای ترید.
            </div>
          ) : null}
        </div>
        <div className="w-full col-span-1 bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mb-[24px] px-[40px] py-[35px]">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setIsRulesOpen({
                ...isRulesOpen,
                ruleSeven: !isRulesOpen.ruleSeven,
              })
            }
          >
            <p className="text-secondary-bg-color text-xl font-extrabold">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </p>
            {isRulesOpen.ruleSeven ? <ArrowDown /> : <ArrowTop />}
          </div>
          {isRulesOpen.ruleSeven ? (
            <div className="text-[#767D80] font-medium leading-[35px] border-t mt-[20px] pt-[20px]">
              سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
              بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را
              به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل
              شده و در این راه خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر
              در راستای تامین سرمایه معامله گران برای ترید.
            </div>
          ) : null}
        </div>
        <div className="w-full col-span-1 bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mb-[24px] px-[40px] py-[35px]">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setIsRulesOpen({
                ...isRulesOpen,
                ruleEight: !isRulesOpen.ruleEight,
              })
            }
          >
            <p className="text-secondary-bg-color text-xl font-extrabold">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </p>
            {isRulesOpen.ruleEight ? <ArrowDown /> : <ArrowTop />}
          </div>
          {isRulesOpen.ruleEight ? (
            <div className="text-[#767D80] font-medium leading-[35px] border-t mt-[20px] pt-[20px]">
              سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
              بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را
              به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل
              شده و در این راه خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر
              در راستای تامین سرمایه معامله گران برای ترید.
            </div>
          ) : null}
        </div>
        <div className="w-full col-span-1 bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mb-[24px] px-[40px] py-[35px]">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setIsRulesOpen({
                ...isRulesOpen,
                ruleNine: !isRulesOpen.ruleNine,
              })
            }
          >
            <p className="text-secondary-bg-color text-xl font-extrabold">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </p>
            {isRulesOpen.ruleNine ? <ArrowDown /> : <ArrowTop />}
          </div>
          {isRulesOpen.ruleNine ? (
            <div className="text-[#767D80] font-medium leading-[35px] border-t mt-[20px] pt-[20px]">
              سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
              بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را
              به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل
              شده و در این راه خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر
              در راستای تامین سرمایه معامله گران برای ترید.
            </div>
          ) : null}
        </div>
        <div className="w-full col-span-1 bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mb-[24px] px-[40px] py-[35px]">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setIsRulesOpen({
                ...isRulesOpen,
                ruleTen: !isRulesOpen.ruleTen,
              })
            }
          >
            <p className="text-secondary-bg-color text-xl font-extrabold">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </p>
            {isRulesOpen.ruleTen ? <ArrowDown /> : <ArrowTop />}
          </div>
          {isRulesOpen.ruleTen ? (
            <div className="text-[#767D80] font-medium leading-[35px] border-t mt-[20px] pt-[20px]">
              سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
              بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را
              به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه
              معامله گران برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل
              شده و در این راه خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر
              در راستای تامین سرمایه معامله گران برای ترید.
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default FullRulesReview
