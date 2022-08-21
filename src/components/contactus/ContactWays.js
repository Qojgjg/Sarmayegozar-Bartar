import React from "react";
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

const ContactWays = () => {
  return (
    <div className="w-full mb-[94px] px-[72px]">
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
              Duqe Square Business Center, Quarter Deck, QE2, Mina Rashid 554789
              Dubai U.A.E
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
  );
};

export default ContactWays;
