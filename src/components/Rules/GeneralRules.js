import React, { useState } from "react";

const GeneralRules = () => {
  const [isRuleOne, setIsRuleOne] = useState(true);
  const [isRuleTwo, setIsRuleTwo] = useState(false);
  const [isRuleThree, setIsRuleThree] = useState(false);
  const [isRuleFour, setIsRuleFour] = useState(false);

  return (
    <section className="w-full px-[72px]">
      <div className="flex items-center gap-[32px] mb-[35px]">
        <div className="text-secondary-bg-color text-[32px] font-extrabold whitespace-nowrap">
          قوانین کلی <span className="font-light">سایت</span>
        </div>
        <div className="w-full h-[1px] bg-[#E8E8E8]" />
      </div>
      <div className="flex justify-between gap-[46px] mb-[70px]">
        <div className="flex flex-col items-center space-y-[20px]">
          <button
            className={`text-sm font-bold rounded-[10px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[60px] py-[20px] ${
              isRuleOne
                ? "text-white bg-primary-btn-color"
                : "text-[#767D80] bg-white"
            }`}
            onClick={() => {
              setIsRuleOne(true);
              setIsRuleTwo(false);
              setIsRuleThree(false);
              setIsRuleFour(false);
            }}
          >
            <div className="w-[406px]">زمان چلنج</div>
          </button>
          <button
            className={`text-sm font-bold rounded-[10px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[60px] py-[20px] ${
              isRuleTwo
                ? "text-white bg-primary-btn-color"
                : "text-[#767D80] bg-white"
            }`}
            onClick={() => {
              setIsRuleOne(false);
              setIsRuleTwo(true);
              setIsRuleThree(false);
              setIsRuleFour(false);
            }}
          >
            <div className="w-[406px]">تارگت های سودمند یا هدف ها</div>
          </button>
          <button
            className={`text-sm font-bold rounded-[10px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[60px] py-[20px] ${
              isRuleThree
                ? "text-white bg-primary-btn-color"
                : "text-[#767D80] bg-white"
            }`}
            onClick={() => {
              setIsRuleOne(false);
              setIsRuleTwo(false);
              setIsRuleThree(true);
              setIsRuleFour(false);
            }}
          >
            <div className="w-[406px]">اُفت حساب</div>
          </button>
          <button
            className={`text-sm font-bold rounded-[10px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[60px] py-[20px] ${
              isRuleFour
                ? "text-white bg-primary-btn-color"
                : "text-[#767D80] bg-white"
            }`}
            onClick={() => {
              setIsRuleOne(false);
              setIsRuleTwo(false);
              setIsRuleThree(false);
              setIsRuleFour(true);
            }}
          >
            <div className="w-[406px]">
              حداقل روزهای معاملاتی در هر مرحله چقدر است؟
            </div>
          </button>
        </div>
        <div className="bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[40px] py-[30px]">
          <p className="text-primary-btn-color text-xl font-extrabold mb-[10px]">
            چرا باید از سرمایه گذار برتر استفاده کنیم؟
          </p>
          <p className="text-[#767D80] leading-[35px] font-medium">
            سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
            بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را به
            تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین سرمایه معامله
            گران برای ترید سرمایه گذار برتر در راستای تامین سرمایه معامله گران
            برای ترید در بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه
            خدماتی را به تریدرها ارائه میکند سرمایه گذار برتر در راستای تامین
            سرمایه معامله گران برای ترید.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GeneralRules
