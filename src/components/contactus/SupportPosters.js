import React from "react";
import { Link } from "react-router-dom";
import FastLogin from "../FastLogin";
import Location from "../../assets/svg/Location";
import Email from "../../assets/svg/Email";
import PhoneCallingOutline from "../../assets/svg/PhoneCallingOutline";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const SupportPosters = () => {
  return (
    <>
      <div className="w-full px-[72px]">
        <div className="w-full bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[40px] pb-[80px] mb-[38px]">
          <div className="text-center text-secondary-bg-color text-[22px] font-light mb-[30px]">
            پشتیبانان <span className="font-extrabold">تلگرام</span> سرمایه گذار
            برتر
          </div>
          <div className="flex justify-evenly items-center mb-[30px]">
            <div className="w-[338px] h-[58px] relative bg-gradient-to-l from-[rgba(236,236,236,1)] to-[rgba(236,236,236,0)] rounded-[10px] p-[1px]">
              <div className="w-full h-full flex items-center bg-white rounded-[10px] px-[19px] py-[17px] gap-[14px]">
                <span className="text-primary-btn-color text-sm font-extrabold whitespace-nowrap">
                  پشتیبان شماره ۱
                </span>
                <span className="text-[#BBBBBB] text-xs font-bold">
                  SGB_TECHNICALSUPPORT@
                </span>
                <Link
                  to={"/"}
                  className="w-[52px] h-[50px] absolute left-[-16px] flex flex-col justify-center bg-primary-btn-color rounded-[10px] shadow-[0px_10px_15px_rgba(0,152,255,0.4)]"
                >
                  <img
                    className="w-[24px] mx-auto"
                    src={require("../../assets/img/Telegram.png")}
                    alt="Telegram"
                  />
                </Link>
              </div>
            </div>
            <div className="w-[338px] h-[58px] relative bg-gradient-to-l from-[rgba(236,236,236,1)] to-[rgba(236,236,236,0)] rounded-[10px] p-[1px]">
              <div className="w-full h-full flex items-center bg-white rounded-[10px] px-[19px] py-[17px] gap-[14px]">
                <span className="text-primary-btn-color text-sm font-extrabold whitespace-nowrap">
                  پشتیبان شماره ۲
                </span>
                <span className="text-[#BBBBBB] text-xs font-bold">
                  SGB_TECHNICALSUPPORT@
                </span>
                <Link
                  to={"/"}
                  className="w-[52px] h-[50px] absolute left-[-16px] flex flex-col justify-center bg-primary-btn-color rounded-[10px] shadow-[0px_10px_15px_rgba(0,152,255,0.4)]"
                >
                  <img
                    className="w-[24px] mx-auto"
                    src={require("../../assets/img/Telegram.png")}
                    alt="Telegram"
                  />
                </Link>
              </div>
            </div>
            <div className="w-[338px] h-[58px] relative bg-gradient-to-l from-[rgba(236,236,236,1)] to-[rgba(236,236,236,0)] rounded-[10px] p-[1px]">
              <div className="w-full h-full flex items-center bg-white rounded-[10px] px-[19px] py-[17px] gap-[14px]">
                <span className="text-primary-btn-color text-sm font-extrabold whitespace-nowrap">
                  پشتیبان شماره ۳
                </span>
                <span className="text-[#BBBBBB] text-xs font-bold">
                  SGB_TECHNICALSUPPORT@
                </span>
                <Link
                  to={"/"}
                  className="w-[52px] h-[50px] absolute left-[-16px] flex flex-col justify-center bg-primary-btn-color rounded-[10px] shadow-[0px_10px_15px_rgba(0,152,255,0.4)]"
                >
                  <img
                    className="w-[24px] mx-auto"
                    src={require("../../assets/img/Telegram.png")}
                    alt="Telegram"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="w-[338px] h-[58px] relative bg-gradient-to-l from-[rgba(236,236,236,1)] to-[rgba(236,236,236,0)] rounded-[10px] p-[1px]">
              <div className="w-full h-full flex items-center bg-white rounded-[10px] px-[19px] py-[17px] gap-[14px]">
                <span className="text-primary-btn-color text-sm font-extrabold whitespace-nowrap">
                  پشتیبان شماره ۴
                </span>
                <span className="text-[#BBBBBB] text-xs font-bold">
                  SGB_TECHNICALSUPPORT@
                </span>
                <Link
                  to={"/"}
                  className="w-[52px] h-[50px] absolute left-[-16px] flex flex-col justify-center bg-primary-btn-color rounded-[10px] shadow-[0px_10px_15px_rgba(0,152,255,0.4)]"
                >
                  <img
                    className="w-[24px] mx-auto"
                    src={require("../../assets/img/Telegram.png")}
                    alt="Telegram"
                  />
                </Link>
              </div>
            </div>
            <div className="w-[338px] h-[58px] relative bg-gradient-to-l from-[rgba(236,236,236,1)] to-[rgba(236,236,236,0)] rounded-[10px] p-[1px]">
              <div className="w-full h-full flex items-center bg-white rounded-[10px] px-[19px] py-[17px] gap-[14px]">
                <span className="text-primary-btn-color text-sm font-extrabold whitespace-nowrap">
                  پشتیبان شماره ۵
                </span>
                <span className="text-[#BBBBBB] text-xs font-bold">
                  SGB_TECHNICALSUPPORT@
                </span>
                <Link
                  to={"/"}
                  className="w-[52px] h-[50px] absolute left-[-16px] flex flex-col justify-center bg-primary-btn-color rounded-[10px] shadow-[0px_10px_15px_rgba(0,152,255,0.4)]"
                >
                  <img
                    className="w-[24px] mx-auto"
                    src={require("../../assets/img/Telegram.png")}
                    alt="Telegram"
                  />
                </Link>
              </div>
            </div>
            <div className="w-[338px] h-[58px] relative bg-gradient-to-l from-[rgba(236,236,236,1)] to-[rgba(236,236,236,0)] rounded-[10px] p-[1px]">
              <div className="w-full h-full flex items-center bg-white rounded-[10px] px-[19px] py-[17px] gap-[14px]">
                <span className="text-primary-btn-color text-sm font-extrabold whitespace-nowrap">
                  پشتیبان شماره ۶
                </span>
                <span className="text-[#BBBBBB] text-xs font-bold">
                  SGB_TECHNICALSUPPORT@
                </span>
                <Link
                  to={"/"}
                  className="w-[52px] h-[50px] absolute left-[-16px] flex flex-col justify-center bg-primary-btn-color rounded-[10px] shadow-[0px_10px_15px_rgba(0,152,255,0.4)]"
                >
                  <img
                    className="w-[24px] mx-auto"
                    src={require("../../assets/img/Telegram.png")}
                    alt="Telegram"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mb-[62px]">
          <a href={"/"}>
            <img
              className="w-full col-span-1"
              src={require("../../assets/img/joinTelegram1.png")}
              alt="joinTelegram1"
            />
          </a>
          <a href={"/"}>
            <img
              className="w-full col-span-1"
              src={require("../../assets/img/joinTelegram2.png")}
              alt="joinTelegram2"
            />
          </a>
        </div>
        <div className="mb-[94px]">
          <h4 className="text-center text-secondary-bg-color text-[34px] mb-[47px]">
            <p className="font-extrabold">راه های ارتباط با</p>
            <p className="font-light">سرمایه گذار برتر</p>
          </h4>
          <div className="flex justify-center items-center gap-[24px]">
            <div className="w-[746px] h-[324px] bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[40px]">
              <div className="flex justify-between items-center text-[#797979] text-[13px] font-bold border-b pb-[15px]">
                <div className="flex items-center gap-[10px]">
                  <Location />
                  <p>دفتر مرکزی</p>
                </div>
                <p>
                  Duqe Square Business Center, Quarter Deck, QE2, Mina Rashid
                  554789 Dubai U.A.E
                </p>
              </div>
              <div className="flex justify-between items-center text-[#797979] text-[13px] font-bold border-b py-[15px]">
                <div className="flex items-center gap-[10px]">
                  <Email />
                  <p>ایمیل</p>
                </div>
                <p>admin@sarmayegozarebartar.ir</p>
              </div>
              <div className="flex justify-between items-center text-[#797979] text-[13px] font-bold border-b py-[15px]">
                <div className="flex items-center gap-[10px]">
                  <PhoneCallingOutline />
                  <p>تماس تایم اداری</p>
                </div>
                <p>۵۶ ۲۳ ۴۲ ۲۸ ۰۲۱</p>
              </div>
              <div className="flex justify-between items-center text-[#797979] text-[13px] font-bold border-b py-[15px]">
                <div className="flex items-center gap-[10px]">
                  <img
                    src={require("../../assets/img/telegram-blue.png")}
                    alt="telegram Logo"
                  />
                  <p>پشتیبانی اول سفارشات تلگرام</p>
                </div>
                <p>SGB_Sales@</p>
              </div>
              <div className="flex justify-between items-center text-[#797979] text-[13px] font-bold pt-[15px]">
                <div className="flex items-center gap-[10px]">
                  <img
                    src={require("../../assets/img/telegram-blue.png")}
                    alt="telegram Logo"
                  />
                  <p>پشتیبانی دوم سفارشات تلگرام</p>
                </div>
                <p>SGB_Sales2@</p>
              </div>
            </div>
            <div>
              <MapContainer
                className=" left-1/2 -translate-x-1/2 w-full"
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      <FastLogin />
    </>
  );
};

export default SupportPosters
