import React from "react";
import { Link } from "react-router-dom";
import SiteLogoVertical from "../assets/svg/SiteLogoVertical";
import Twiter from "../assets/svg/Twiter";
import Linkedin from "../assets/svg/Linkedin";
import WhatsApp from "../assets/svg/WhatsApp";
import Instagram from "../assets/svg/Instagram";
import Facebooke from "../assets/svg/Facebooke";
import Youtube from "../assets/svg/Youtube";
import PhoneCalling from "../assets/svg/PhoneCalling";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-bg-color px-[72px] pt-10 pb-[87px]">
      <div className="flex justify-between mb-[40px]">
        <div className="flex items-center">
          <SiteLogoVertical />
          <div className="mr-[27px]">
            <p className="text-sm font-extrabold mb-[7px]">
              سرمایه گذار برتر | تامین سرمایه معامله گران
            </p>
            <p className="w-[697px] text-sm leading-[35px] font-medium">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدو
              برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-extrabold mb-4">نشان های اعتماد</p>
          <div className="flex items-center gap-[10px]">
            <div className="w-[95px] h-[95px] flex flex-col justify-center rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
              <img
                className="mx-auto"
                src={require("../assets/img/TrustIcon1.png")}
                alt="TrustIcon1"
              />
            </div>
            <div className="w-[95px] h-[95px] flex flex-col justify-center rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
              <img
                className="mx-auto"
                src={require("../assets/img/TrustIcon2.png")}
                alt="TrustIcon2"
              />
            </div>
            <div className="w-[95px] h-[95px] flex flex-col justify-center rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
              <img
                className="mx-auto"
                src={require("../assets/img/TrustIcon3.png")}
                alt="TrustIcon3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-y py-10">
        <ul className="list-disc text-sm space-y-[17px]">
          <div className="font-extrabold">با سرمایه گذار برتر</div>
          <li className="font-bold text-[#8F8F8F] hover:text-[#0098FF] transition-all">
            <a href="#">وبلاگ سرمایه گذار برتر</a>
          </li>
          <li className="font-bold text-[#8F8F8F] hover:text-[#0098FF] transition-all">
            <a href="#">همکاری با سرمایه گذار برتر</a>
          </li>
          <li className="font-bold text-[#8F8F8F] hover:text-[#0098FF] transition-all">
            <a href="#">درباره سرمایه گذار برتر</a>
          </li>
          <li className="font-bold text-[#8F8F8F] hover:text-[#0098FF] transition-all">
            <a href="#">تماس با سرمایه گذار برتر</a>
          </li>
        </ul>
        <ul className="list-disc text-sm space-y-[17px]">
          <div className="font-extrabold">لینک های کاربردی</div>
          <li className="font-bold text-[#8F8F8F] hover:text-[#0098FF] transition-all">
            <Link to="/">ورود و ثبت نام</Link>
          </li>
          <li className="font-bold text-[#8F8F8F] hover:text-[#0098FF] transition-all">
            <Link to="/">تعرفه ها</Link>
          </li>
          <li className="font-bold text-[#8F8F8F] hover:text-[#0098FF] transition-all">
            <Link to="/">کانال تلگرام</Link>
          </li>
          <li className="font-bold text-[#8F8F8F] hover:text-[#0098FF] transition-all">
            <Link to="/">جستجو در سایت</Link>
          </li>
        </ul>
        <ul className="list-disc text-sm space-y-[17px]">
          <div className="font-extrabold">دسترسی سریع</div>
          <li className="font-bold text-[#8F8F8F] hover:text-[#0098FF] transition-all">
            <Link to="/">سوالات متداول</Link>
          </li>
          <li className="font-bold text-[#8F8F8F] hover:text-[#0098FF] transition-all">
            <Link to="/">حریم خصوصی</Link>
          </li>
          <li className="font-bold text-[#8F8F8F] hover:text-[#0098FF] transition-all">
            <Link to="/">قوانین و مقررات</Link>
          </li>
          <li className="font-bold text-[#8F8F8F] hover:text-[#0098FF] transition-all">
            <Link to="/">ثبت شکایات</Link>
          </li>
        </ul>
        <div>
          <div className="text-sm font-extrabold mb-[30px]">
            همراه ما باشید!
          </div>
          <div className="flex gap-[30px] mb-[51px]">
            <a href="#">
              <Twiter />
            </a>
            <a href="#">
              <Linkedin />
            </a>
            <a href="#">
              <WhatsApp />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Facebooke />
            </a>
            <a href="#">
              <Youtube />
            </a>
          </div>
          <div className="flex justify-between items-center bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] p-[17px]">
            <div className="text-sm font-bold text-[#8F8F8F]">تلفن مشاوره</div>
            <div className="flex items-center gap-1">
              <p className="text-lg font-extrabold text-[#0098FF]">
                ۴۸ ۸۹ ۴۵۶۷ <span className="text-[#D1D1D1]">۰۲۱</span>
              </p>
              <PhoneCalling />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm font-medium text-[#8F8F8F] mt-[5px]">
        <span>
          اين وبسايت متعلق به گروه سرمایه گذار برتر ميباشد و تمامی حقوق آن محفوظ
          است.
        </span>
        <span>.2022 © Copyright All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
