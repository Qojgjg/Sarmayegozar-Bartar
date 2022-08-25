import React from "react";
import InputSearchIcon from "../../assets/svg/InputSearchIcon";

const SearchHeader = () => {
  return (
    <div className="w-full h-[169px] relative bg-secondary-bg-color mb-[73px] px-[72px]">
      <div className="w-full h-[1px] bg-[#495156]" />
      <div className="text-center mt-[40px]">
        <h3 className="text-white text-[32px] font-extrabold">
          آرشیو مطالب <span className="font-light">بلاگ</span>
        </h3>
        <p className="text-[rgba(255,255,255,0.7)] text-sm font-medium leading-[40px]">
          منبعی از مطالب آموزشی درباره فارکس، سرمایه گذاری و اخبار فارکس...
        </p>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[140px]">
        <div className="relative">
          <input
            className="w-[636px] h-[58px] rounded-[10px] px-[25px] pl-[65px] py-[4px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)]"
            placeholder="جستجو کلمه کلیدی در میان مطالب منتشر شده در بلاگ..."
            type="text"
          />
          <div className="absolute top-[-0.5%] left-[-1.5%]">
            <InputSearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
