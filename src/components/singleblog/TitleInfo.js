import React from "react";
import Message from "../../assets/svg/Message";
import Edit from "../../assets/svg/Edit";
import Calender from "../../assets/svg/Calender";
import Category from "../../assets/svg/Category";

const TitleInfo = () => {
  return (
    <div className="w-full h-[248px] bg-secondary-bg-color px-[72px]">
      <div className="w-full h-[1px] bg-[#495156]" />
      <h2 className="text-center text-white text-[32px] font-extrabold mt-[40px] mb-[10px]">
        تریدر ها در سال چقدر سود میکنند؟
      </h2>
      <div className="text-center text-[#BFBFBF] text-sm font-medium mb-[40px]">
        صفحه اصلی {">"} آرشیو مطالب {">"} آموزش ترید {">"}{" "}
        <span className="text-white text-opacity-20">نمایش مطلب</span>
      </div>
      <div className="flex justify-center items-center text-[#BFBFBF] gap-[71px]">
        <div className="flex items-center gap-[5px]">
          <Message />
          <span>۵ دیدگاه</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <Edit />
          <span>نویسنده‌: امیرحسین نژادجعفری</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <Calender />
          <span>تاریخ انتشار مطلب : ۱۴۰۱/۱/۱</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <Category />
          <span>دسته بندی : آموزش فارکس</span>
        </div>
      </div>
    </div>
  );
};

export default TitleInfo;
