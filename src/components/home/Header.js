import React from "react";
import HeaderShadow from "../../assets/svg/HeaderShadow";
import HeaderTradingFrame from "../../assets/svg/HeaderTradingFrame";
import WordBig from "../../assets/svg/WordBig";
import WordLittle from "../../assets/svg/WordLittle";
import AppleIconHeader from "../../assets/svg/AppleIconHeader";
import CoinToDolarHeader from "../../assets/svg/CoinToDolarHeader";
import BitcoinIconHeader from "../../assets/svg/BitcoinIconHeader";
import Dowjones from "../../assets/svg/Dowjones";
import TraceIcon from "../../assets/svg/TraceIcon";

const Header = () => {
  return (
    <>
      <div className="w-full h-[525px] flex justify-between bg-secondary-bg-color text-white px-[72px]">
        <div className="flex flex-col justify-center">
          <div>
            <div className="flex items-center gap-[28px]">
              <div className="w-[1px] h-[121px] bg-white" />
              <h2 className="text-5xl leading-[70px]">
                <p className="font-extrabold">تامین سرمایه معامله گران</p>
                <p className="font-light">در بازارهای مالی</p>
              </h2>
            </div>
            <p className="w-[636px] text-lg mt-[14px]">
              سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
              بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را
              به تریدرها ارائه میکند.
            </p>
            <div className="flex items-center mt-[30px] gap-[24px]">
              <button className="bg-primary-btn-color hover:bg-secondary-btn-color transition-all rounded-[10px] px-[60px] py-[11px]">
                مشاهده پلن ها
              </button>
              <button className="border border-white rounded-[10px] hover:bg-primary-bg-color hover:text-secondary-bg-color transition-all px-[60px] py-[11px]">
                درباره سرمایه گذار برتر
              </button>
            </div>
          </div>
        </div>
        <div className="flex relative flex-col justify-center pl-[72px]">
          <HeaderTradingFrame />
          <div className="absolute top-[20px] left-[200px] my-animate-one">
            <AppleIconHeader />
          </div>
          <div className="absolute top-[25px] right-[10px] my-animate-three">
            <CoinToDolarHeader />
          </div>
          <div className="absolute top-[65px] left-[12px] my-animate-two">
            <TraceIcon />
          </div>
          <div className="absolute bottom-[110px] right-[-75px] my-animate-two">
            <BitcoinIconHeader />
          </div>
          <div className="absolute bottom-[100px] left-[72px] my-animate-three">
            <Dowjones />
          </div>
        </div>
      </div>
      <div className="relative">
        <HeaderShadow />
        {/* <div className="absolute -top-full left-0 z-[-1]">
          <WordBig />
        </div> */}
        <div className="absolute -top-full right-0 z-[-1]">
          <WordLittle />
        </div>
      </div>
    </>
  );
};

export default Header;
