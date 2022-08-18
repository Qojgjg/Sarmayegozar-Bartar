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
        slidesPerView={5}
        modules={[Navigation]}
        className="w-full gap-[10px] bg-primary-bg-color"
      >
        <SwiperSlide className="ml-[10px]">
          <div className="bg-white rounded-[20px] py-[21px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
            <img
              className="w-[77px] mx-auto"
              src={require("../../assets/img/FusionMarketsLogo.png")}
              alt="Fusion Markets Logo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-[10px]">
          <div className="bg-white rounded-[20px] py-[21px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
            <img
              className="w-[77px] mx-auto"
              src={require("../../assets/img/FusionMarketsLogo.png")}
              alt="Fusion Markets Logo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-[10px]">
          <div className="bg-white rounded-[20px] py-[21px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
            <img
              className="w-[77px] mx-auto"
              src={require("../../assets/img/FusionMarketsLogo.png")}
              alt="Fusion Markets Logo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-[10px]">
          <div className="bg-white rounded-[20px] py-[21px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
            <img
              className="w-[77px] mx-auto"
              src={require("../../assets/img/FusionMarketsLogo.png")}
              alt="Fusion Markets Logo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-[10px]">
          <div className="bg-white rounded-[20px] py-[21px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
            <img
              className="w-[77px] mx-auto"
              src={require("../../assets/img/FusionMarketsLogo.png")}
              alt="Fusion Markets Logo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-[10px]">Slide 6</SwiperSlide>
        <SwiperSlide className="ml-[10px]">Slide 7</SwiperSlide>
        <SwiperSlide className="ml-[10px]">Slide 8</SwiperSlide>
        <SwiperSlide className="ml-[10px]">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularPlatforms;
