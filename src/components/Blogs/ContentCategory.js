import React from "react";

const ContentCategory = () => {
  return (
    <div className="w-full px-[72px] mb-[76px]">
      <div className="flex items-center gap-[32px] mb-3">
        <div className="text-lg font-extrabold whitespace-nowrap">
          دسته بندی مطالب
        </div>
        <div className="w-full h-[1px] bg-[#E8E8E8]" />
      </div>
      <div className="flex justify-between items-center gap-[20px]">
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
    </div>
  );
};

export default ContentCategory;
