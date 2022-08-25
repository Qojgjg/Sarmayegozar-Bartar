import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderShadow from "../../assets/svg/HeaderShadow";
import HeaderTradingFrame from "../../assets/svg/HeaderTradingFrame";
import WordBig from "../../assets/svg/WordBig";
import WordLittle from "../../assets/svg/WordLittle";

const Header = () => {
  const navigate = useNavigate();

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
            <p className="w-[636px] text-lg leading-[40px] mt-[14px]">
              سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
              بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را
              به تریدرها ارائه میکند.
            </p>
            <div className="flex items-center mt-[30px] mb-[53px] gap-[24px]">
              <button
                onClick={() => navigate("/plans")}
                className="w-[237px] h-[62px] bg-primary-btn-color hover:bg-secondary-btn-color transition-all rounded-[10px] py-[11px]"
              >
                مشاهده پلن ها
              </button>
              <button
                onClick={() => navigate("/aboutus")}
                className="w-[250px] h-[62px] border border-white rounded-[10px] hover:bg-primary-bg-color hover:text-secondary-bg-color transition-all py-[11px]"
              >
                درباره سرمایه گذار برتر
              </button>
            </div>
            <p className="text-[27px] font-light">
              <span className="font-extrabold">+ ۲۰۰۰ نفر هم اکنون</span> در حال
              معامله هستند...
            </p>
          </div>
        </div>
        <div className="flex relative flex-col justify-center pl-[72px]">
          <HeaderTradingFrame />
          <div className="absolute top-[20px] left-[200px] my-animate-one">
            <img
              src={require("../../assets/img/aplle-icon-header.png")}
              alt="aplle-icon-header"
            />
          </div>
          <div className="absolute top-[25px] right-[10px] my-animate-three">
            <img
              src={require("../../assets/img/dolllorToCoin-icon-header.png")}
              alt="aplle-icon-header"
            />
          </div>
          <div className="absolute top-[65px] left-[12px] my-animate-two">
            <img
              src={require("../../assets/img/Trace-icon-header.png")}
              alt="aplle-icon-header"
            />
          </div>
          <div className="absolute bottom-[110px] right-[-75px] my-animate-two">
            <img
              src={require("../../assets/img/BTC-icon-header.png")}
              alt="aplle-icon-header"
            />
          </div>
          <div className="absolute bottom-[100px] left-[72px] my-animate-three">
            <img
              src={require("../../assets/img/dowjnes-icon-header.png")}
              alt="aplle-icon-header"
            />
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
