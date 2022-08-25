import React from "react";
import { useNavigate } from "react-router-dom";
import CustomerStatisticsCover from "../../assets/svg/CustomerStatisticsCover";
import ReceiptDiscount from "../../assets/svg/ReceiptDiscount";
import AddUser from "../../assets/svg/AddUser";
import Ranking from "../../assets/svg/Ranking";
import TopFrameVideo from "../../assets/svg/TopFrameVideo";
import BottomFrameVideo from "../../assets/svg/BottomFrameVideo";
import ArrowLeftVideo from "../../assets/svg/ArrowLeftVideo";
import ArrowRightVideo from "../../assets/svg/ArrowRightVideo";
import VideoPaginate from "../../assets/svg/VideoPaginate";
import Play from "../../assets/svg/Play";
import BGPlay from "../../assets/svg/BGPlay";

const CustomerStatistics = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="w-full h-[371px] flex justify-center gap-[24px] mt-[95px] mb-[76px] px-[72px]">
        <div>
          <div className="w-[636px] h-[285px] relative bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[30px] pb-[56px]">
            <p className="text-center text-xl font-extrabold text-secondary-bg-color">
              آمار مشتریان <span className="font-light">(۲۰۲۲)</span>
            </p>
            <div className="absolute top-[38px]">
              <CustomerStatisticsCover />
            </div>
            <div className="flex justify-center items-center gap-[24px] mt-[49px] px-[10px]">
              <div className="w-[153px] flex flex-col justify-center items-center">
                <AddUser />
                <div className="text-xl font-bold">+۵۰۰۰</div>
                <div className="text-xs text-[#767D80]">تعداد ثبت نامی ها</div>
              </div>
              <div className="w-[1px] h-[107px] bg-[#ECECEC]" />
              <div className="w-[153px] flex flex-col justify-center items-center">
                <Ranking />
                <div className="text-xl font-bold">+۴۰۳٪</div>
                <div className="text-xs text-[#767D80]">
                  بزرگترین پرداخت سود
                </div>
              </div>
              <div className="w-[1px] h-[107px] bg-[#ECECEC]" />
              <div className="w-[153px] flex flex-col justify-center items-center">
                <ReceiptDiscount />
                <div className="text-xl font-bold">+۴۸۰</div>
                <div className="text-xs text-[#767D80]">مجموع پرداخت سود</div>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate("login")}
            className="w-full h-[62px] bg-primary-btn-color text-primary-bg-color hover:bg-secondary-btn-color transition-all rounded-[10px] mt-[24px] px-[60px] py-[11px]"
          >
            همین حالا به مشتریان ما بپیوندید
          </button>
        </div>
        <div className="w-[636px] h-[371px] relative bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[30px]">
          <div className="absolute top-[30px] left-1/2 -translate-x-1/2 z-10">
            <TopFrameVideo />
          </div>
          <p className="absolute top-[30px] left-1/2 -translate-x-1/2 z-10 text-[#1B262C] text-xl font-extrabold">
            دیدگاه مشتریان <span className="font-light">درباره ما</span>
          </p>
          <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-10">
            <BottomFrameVideo />
          </div>
          <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-10">
            <div className="w-[237px] flex justify-between items-center gap-[35px]">
              <ArrowRightVideo />
              <VideoPaginate />
              <ArrowLeftVideo />
            </div>
          </div>
          <img
            className="w-full rounded-[10px]"
            src={require("../../assets/img/video-cover-image.png")}
            alt="video cover image"
          />
          <div className="w-[576px] h-[311px] absolute top-[30px] right-[30px] bg-[#1B262C] bg-opacity-50 rounded-[10px]" />
          <div className="absolute top-1/2 left-1/2 bg-[rgba(217,217,217,0.1)] rounded-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(217,217,217,0.1)] backdrop-blur-[20px] px-[27px] py-[25px]">
            <Play />
          </div>
        </div>
      </section>
      <div className="w-full mt-[76px] mb-[64px] px-[72px]">
        <img
          className="w-full"
          src={require("../../assets/img/Benefit-Banner.png")}
          alt="Benefit Banner"
        />
      </div>
    </>
  );
};

export default CustomerStatistics;
