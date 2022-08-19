import React from "react";
import ButtonOfScrollTo from "../../assets/svg/ButtonOfScrollTo";

const InfoHeader = () => {
  return (
    <div className="w-full h-[201px] relative bg-secondary-bg-color px-[72px]">
      <div className="w-full h-[1px] bg-[#495156]" />
      <div className="text-center mt-[40px]">
        <h3 className="text-white text-[32px] font-extrabold">
          درباره شرکت سرمایه گذار برتر بیشتر بدانیم
        </h3>
        <p className="text-[rgba(255,255,255,0.7)] text-sm font-medium leading-[40px]">
          اولین شرکت تامین سرمایه معامله گران در ایران
        </p>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-92%]">
        <div className="relative">
          <div className="w-[966px] text-center bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[49px] py-[40px]">
            <p className="text-[#555555] font-extrabold">
              اهداف اصلی شرکت سرمایه گذار برتر
            </p>
            <p className="text-[#717171] leading-[30px] text-sm font-medium">
              تا کنون معامله گران زیادی از خدمات ما استفاده کرده اند که تعداد
              آنها به سرعت درحال افزایش است. هدف اصلی شرکت ایجاد بستری امن و
              بدور از حواشی است تا تریدرهای موفق در مسیر درستی برای استقلال مالی
              خود قرار بگیرند. فعالیت شرکت، از شهریور 1400 آغاز شد و پس از مدتی
              بصورت رسمی، شروع به گسترش خدمات خود در سطح کشور نمود. از مهم ترین
              اهداف شرکت، ارائه خدمات بین المللی است که در حال بررسی تیم و
              کارشناسان قرار گرفته و طی برآوردهای اخیر، بزودی این پروژه کلید
              میخورد.
            </p>
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
