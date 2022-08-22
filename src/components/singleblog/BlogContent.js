import React from "react";
import Twiter from "../../assets/svg/Twiter";
import Linkedin from "../../assets/svg/Linkedin";
import WhatsApp from "../../assets/svg/WhatsApp";
import Instagram from "../../assets/svg/Instagram";
import Facebooke from "../../assets/svg/Facebooke";
import Youtube from "../../assets/svg/Youtube";

const BlogContent = () => {
  return (
    <section className="w-[966px] relative top-[-25px] bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mx-auto mb-[69px] p-[40px]">
      <img
        className="w-full rounded-[10px]"
        src={require("../../assets/img/BlogImage2.png")}
        alt="BlogImage"
      />
      <p className="text-[#555555] font-extrabold leading-[32px] mt-[29px]">
        لورم ایپسوم متن ساختگی.
      </p>
      <p className="text-[#717171] text-sm font-medium leading-[35px] mb-[35px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم
        متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
        گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
        لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
        بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال
        و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
        شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
        دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
        مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
        دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
      <div className="w-full flex justify-between items-center border rounded-[10px] px-[45px] py-[15px]">
        <div className="text-[#797979] text-sm font-bold">
          اشتراک گذاری در شبکه های اجتماعی
        </div>
        <div className="flex items-center gap-[20px]">
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
      </div>
    </section>
  );
};

export default BlogContent;
