import CheckoutSidebar from "./CheckoutSidebar"

const CheckoutSecond = (props) =>{
  console.log(props.checkoutList)
  return (
    <div className=" border-b-[1px] border-[#E2E2E2] mx-[72px]">
    <div className="flex gap-6 bg-white w-[1296px] mt-[20px] mx-auto">
      <div className="w-[856px] h-max bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[30px] mb-[133px]">
        <p className="my-[30px] font-extrabold text-[18px] leading-[31.09px] text-[#797979]">جزئیات صورتحساب</p>
        <div className="border-b-[1px] border-[#ECECEC]"></div>
        <div>
          <div className="flex flex-col gap-[30px] pt-[30px] pb-[40px]">
          <div>
          <label>
            <span className="text-[#515151] text-[14px] font-bold leading-[24.18px]">آدرس ایمیل</span>
            <input
              className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px] outline-none"
              placeholder="آدرس ایمیل خود را وارد کنید"
              type="text"
              value={props.checkoutList.email}
              onChange={(e) => props.setCheckoutList({...props.checkoutList, email :e.target.value})}
            />
            </label>
          </div>
          <div className="flex gap-[24px]">
            <div className="w-1/2">
              <label>
                <span className="text-[#515151] text-[14px] font-bold leading-[24.18px]">کشور</span>
                <input
                  className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px] outline-none"
                  placeholder="کشور محل زندگی خود را وارد کنید"
                  type="text"
                  value={props.checkoutList.country}
                  onChange={(e) => props.setCheckoutList({...props.checkoutList, country:e.target.value})}
                  />
                </label>
            </div>
            <div className="w-1/2">
              <label>
                <span className="text-[#515151] text-[14px] font-bold leading-[24.18px]">استان<span className="text-[#C2C2C2]"> (اختیاری)</span></span>
                <input
                  className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px] outline-none"
                  placeholder="استان محل زندگی خود را وارد کنید"
                  type="text"
                  value={props.checkoutList.state}
                  onChange={(e) => props.setCheckoutList({...props.checkoutList, state:e.target.value})}
                />
                </label>
            </div>
          </div>
          <div className="flex gap-[24px]">
          <div className="w-1/2">
              <label>
                <span className="text-[#515151] text-[14px] font-bold leading-[24.18px]">شهر</span>
                <input
                  className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px] outline-none"
                  placeholder="شهر محل زندگی خود را وارد کنید"
                  type="text"
                  value={props.checkoutList.city}
                  onChange={(e) => props.setCheckoutList({...props.checkoutList, city:e.target.value})}
                />
                </label>
            </div>
            <div className="w-1/2">
              <label>
                <span className="text-[#515151] text-[14px] font-bold leading-[24.18px]">نام خیابان و پلاک خانه</span>
                <input
                  className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px] outline-none"
                  placeholder=" نام خیابان و پلاک خانه خود را وارد کنید"
                  type="text"
                  value={props.checkoutList.address1}
                  onChange={(e) => props.setCheckoutList({...props.checkoutList, address1:e.target.value})}
                  />
                </label>
            </div>
          </div>
          <div className="flex gap-[24px]">
          <div className="w-1/2">
              <label>
                <span className="text-[#515151] text-[14px] font-bold leading-[24.18px]">آپارتمان، مجتمع، واحد و...<span className="text-[#C2C2C2]"> (اختیاری)</span></span>
                <input
                  className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px] outline-none"
                  placeholder="واحد محل زندگی خود را وارد کنید"
                  type="text"
                  value={props.checkoutList.address2}
                  onChange={(e) => props.setCheckoutList({...props.checkoutList, address2:e.target.value})}
                />
                </label>
            </div>
            <div className="w-1/2">
              <label>
                <span className="text-[#515151] text-[14px] font-bold leading-[24.18px]">کد پستی<span className="text-[#C2C2C2]"> (اختیاری)</span></span>
                <input
                  className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px] outline-none"
                  placeholder="کد پستی خانه خود را وارد کنید"
                  type="text"
                  value={props.checkoutList.postcode}
                  onChange={(e) => props.setCheckoutList({...props.checkoutList, postcode:e.target.value})}
                  />
                </label>
            </div>
          </div>
          <div className="flex gap-[24px]">
          <div className="w-1/2">
              <label>
                <span className="text-[#515151] text-[14px] font-bold leading-[24.18px]">شماره تماس ثابت<span className="text-[#C2C2C2]"> (اختیاری)</span></span>
                <input
                  className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px] outline-none"
                  placeholder="شماره تماس خود را وارد کنید"
                  type="text"
                  value={props.checkoutList.phone}
                  onChange={(e) => props.setCheckoutList({...props.checkoutList, phone:e.target.value})}
                />
                </label>
            </div>
            <div className="w-1/2">
              <label>
                <span className="text-[#515151] text-[14px] font-bold leading-[24.18px]">شماره موبایل</span>
                <input
                  className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px] outline-none"
                  placeholder="شماره تماس خود را وارد کنید"
                  type="text"
                  value={props.checkoutList.mobile}
                  onChange={(e) => props.setCheckoutList({...props.checkoutList, mobile:e.target.value})}
                  />
                </label>
            </div>
          </div>
          <div>
          <label>
            <span className="text-[#515151] text-[14px] font-bold leading-[24.18px]">گذرواژه</span>
            <input
              className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px] outline-none"
              placeholder="گدرواژه خود را وارد کنید"
              type="password"
              value={props.checkoutList.password}
              onChange={(e) => props.setCheckoutList({...props.checkoutList, password:e.target.value})}
            />
            </label>
          </div>
          <div>
          <label>
            <span className="text-[#515151] text-[14px] font-bold leading-[24.18px]">توضیحات تکمیلی</span>
            <textarea
              className="w-full bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px] outline-none"
              placeholder="توضیحات تکمیلی را وارد کنید"
              type="text"
              rows="6"
              value={props.checkoutList.description}
              onChange={(e) => props.setCheckoutList({...props.checkoutList, description:e.target.value})}
            />
            </label>
          </div>
          <div>
          <label>
            <span className="text-[#515151] text-[14px] font-bold leading-[24.18px]">نام کاربری بازاریاب<span className="text-[#C2C2C2]"> (اختیاری)</span></span>
            <input
              className="w-full h-[63px] bg-[#F3F3F3] rounded-[10px] px-[20px] py-[18px] mt-[14px] outline-none"
              placeholder="نام کاربری بازاریاب را وارد کنید"
              type="text"
              value={props.checkoutList.marketer}
              onChange={(e) => props.setCheckoutList({...props.checkoutList, marketer:e.target.value})}
            />
            </label>
          </div>
          </div>
        </div>
      </div>
      <CheckoutSidebar 
          setShowNext={props.setShowNext}
          showNext={props.showNext}
          setRuleError={props.setRuleError}
          quantity={props.quantity}
          price={props.price}
          totalPrice={props.totalPrice}
          currencies={props.currencies}
          setCurrencies={props.setCurrencies}
          thisCurrency={props.thisCurrency}
          setThisCurrency={props.setThisCurrency}
          checkoutMode={props.checkoutMode}
          setCheckoutMode={props.setCheckoutMode}
          offCode={props.offCode}
          setOffCode={props.setOffCode}
          ruleCheckFirst={props.ruleCheckFirst}
          ruleCheckSecond={props.ruleCheckSecond}
          nextError={props.nextError}
          setNextError={props.setNextError}
          
          showNext2={props.showNext2}
          setShowNext2={props.setShowNext2}
          submit={props.submit}
          />
          </div>
      </div>
  )
}

export default CheckoutSecond