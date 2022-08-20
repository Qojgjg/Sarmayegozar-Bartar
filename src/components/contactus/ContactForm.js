import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full h-[201px] relative bg-secondary-bg-color px-[72px] mb-[621px]">
      <div className="w-full h-[1px] bg-[#495156]" />
      <div className="text-center mt-[40px]">
        <h3 className="text-white text-[32px] font-extrabold">
          تماس با سرمایه گذار برتر
        </h3>
        <p className="text-[#BFBFBF] text-sm font-medium">
          درصورت داشتن هرگونه سوال، میتوانید از مسیر های ارتباطی زیر با ما در
          تماس باشید
        </p>
      </div>
      <div className="w-[1296px] bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mx-auto mt-[50px] p-[40px]">
        <div className="text-center text-[34px] leading-[50px] mb-[50px]">
          <p className="font-extrabold">فرم ارتباط با</p>
          <p className="font-light">سرمایه گذار برتر</p>
        </div>
        <div className="grid grid-cols-4 gap-[23px]">
          <label className="col-span-1 w-full">
            <span className="text-[#717171]">نام شما</span>
            <input
              className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px]"
              placeholder="نام"
              type="text"
            />
          </label>
          <label className="col-span-1 w-full">
            <span className="text-[#717171]">آدرس ایمیل</span>
            <input
              className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px]"
              placeholder="نام"
              type="text"
            />
          </label>
          <label className="col-span-1 w-full">
            <span className="text-[#717171]">شماره تماس</span>
            <input
              className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px]"
              placeholder="نام"
              type="text"
            />
          </label>
          <label className="col-span-1 w-full">
            <span className="text-[#717171]">موضوع پیام</span>
            <input
              className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px]"
              placeholder="نام"
              type="text"
            />
          </label>
          <label className="col-span-4 w-full block mt-[23px]">
            <span className="text-[#717171]">پیام شما:</span>
            <input
              className="w-full h-[152px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px]"
              type="text"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
