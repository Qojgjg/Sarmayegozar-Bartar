import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const PopularPlatforms = () => {
  return (
    <div className="w-full mb-[113px] px-[41px]">
      <h4 className="text-center text-5xl leading-[70px] text-secondary-bg-color mb-[14px]">
        <p className="font-extrabold">محبوب ترین</p>
        <p className="font-light">پلتفرم های ترید</p>
      </h4>
      <p className="w-[636px] text-center mx-auto text-[#767D80] text-[19px] font-medium leading-[40px] mb-[30px]">
        سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
        بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را به
        تریدرها ارائه میکند.
      </p>
      <Swiper
        dir="rtl"
        navigation={true}
        loop={true}
        slidesPerView={5}
        spaceBetween={10}
        modules={[Navigation]}
        className="w-full"
      >
        <SwiperSlide className="ml-[10px]">
          <div className="w-[251px] h-[82px] bg-white rounded-[20px] flex flex-col justify-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
            <img
              className="w-[77px] mx-auto"
              src={require("../../assets/img/FusionMarketsLogo.png")}
              alt="Fusion Markets Logo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-[10px]">
          <div className="w-[251px] h-[82px] bg-white rounded-[20px] flex flex-col justify-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
            <img
              className="w-[133px] mx-auto"
              src={require("../../assets/img/eightcapLogo.png")}
              alt="Fusion Markets Logo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-[10px]">
          <div className="w-[251px] h-[82px] bg-white rounded-[20px] flex flex-col justify-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
            <img
              className="w-[147px] mx-auto"
              src={require("../../assets/img/ICMarketLogo.png")}
              alt="Fusion Markets Logo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-[10px]">
          <div className="w-[251px] h-[82px] bg-white rounded-[20px] flex flex-col justify-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
            <img
              className="w-[153px] mx-auto"
              src={require("../../assets/img/roboForexLogo 1.png")}
              alt="Fusion Markets Logo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-[10px]">
          <div className="w-[251px] h-[82px] bg-white rounded-[20px] flex flex-col justify-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
            <img
              className="w-[65px] mx-auto"
              src={require("../../assets/img/Exness-Logo.png")}
              alt="Fusion Markets Logo"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularPlatforms;
