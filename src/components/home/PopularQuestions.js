import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PopularQuestions = () => {
  const [isQuestionOne, SetIsQuestionOne] = useState(true);
  const [isQuestionTwo, SetIsQuestionTwo] = useState(false);
  const [isQuestionThree, SetIsQuestionThree] = useState(false);
  const [isQuestionFour, SetIsQuestionFour] = useState(false);

  const navigate = useNavigate();

  return (
    <section className="w-full mb-[109px] px-[72px]">
      <div className="flex justify-between items-center gap-[40px] mb-[46px]">
        <p className="text-[34px] font-extrabold whitespace-nowrap">
          سوالات <span className="font-light">متداول</span>
        </p>
        <div className="w-full h-[1px] bg-[#E8E8E8]" />
        <button
          onClick={() => navigate("rules")}
          className="text-[#C7C7C7] border hover:text-primary-btn-color hover:border-primary-btn-color transition-all rounded-[10px] whitespace-nowrap px-[30px] py-[18px]"
        >
          سوالات بیشتر
        </button>
      </div>
      <div className="flex justify-between gap-[46px]">
        <div className="flex flex-col items-center space-y-[20px]">
          <button
            className={`text-sm font-bold rounded-[10px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[60px] py-[20px] ${
              isQuestionOne
                ? "text-white bg-primary-btn-color"
                : "text-[#767D80] bg-white"
            }`}
            onClick={() => {
              SetIsQuestionOne(true);
              SetIsQuestionTwo(false);
              SetIsQuestionThree(false);
              SetIsQuestionFour(false);
            }}
          >
            <div className="w-[406px]">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </div>
          </button>
          <button
            className={`text-sm font-bold rounded-[10px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[60px] py-[20px] ${
              isQuestionTwo
                ? "text-white bg-primary-btn-color"
                : "text-[#767D80] bg-white"
            }`}
            onClick={() => {
              SetIsQuestionOne(false);
              SetIsQuestionTwo(true);
              SetIsQuestionThree(false);
              SetIsQuestionFour(false);
            }}
          >
            <div className="w-[406px]">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </div>
          </button>
          <button
            className={`text-sm font-bold rounded-[10px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[60px] py-[20px] ${
              isQuestionThree
                ? "text-white bg-primary-btn-color"
                : "text-[#767D80] bg-white"
            }`}
            onClick={() => {
              SetIsQuestionOne(false);
              SetIsQuestionTwo(false);
              SetIsQuestionThree(true);
              SetIsQuestionFour(false);
            }}
          >
            <div className="w-[406px]">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
            </div>
          </button>
          <button
            className={`text-sm font-bold rounded-[10px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[60px] py-[20px] ${
              isQuestionFour
                ? "text-white bg-primary-btn-color"
                : "text-[#767D80] bg-white"
            }`}
            onClick={() => {
              SetIsQuestionOne(false);
              SetIsQuestionTwo(false);
              SetIsQuestionThree(false);
              SetIsQuestionFour(true);
            }}
          >
            <div className="w-[406px]">
              چرا باید از سرمایه گذار برتر استفاده کنیم؟
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

export default PopularQuestions;
