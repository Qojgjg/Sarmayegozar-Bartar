import { useState } from "react"
import BuyListArrow from "../../assets/svg/BuyListArrow"
import CheckoutListProps from "./CheckoutListProps"

const CheckoutSidebar = (props) => {

  const [showList, setShowList] = useState(false)

  const next = () => {
    if(!(props.ruleCheckFirst && props.ruleCheckSecond)) return props.setRuleError("لطفا پیش از ادامه قوانین را بپذیرید!")
    if(!props.thisCurrency && props.checkoutMode === "firstMode") return props.setNextError("لطفا پیش از ادامه ورودی های خود را کنترل کنید!")
    props.setShowNext(true)
    props.setNextError("")
  }

  return (
    <div className="flex flex-col w-[416px] gap-[24px]">
      <div className="h-max px-[40px] py-[42px] bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
        <div className="mb-[17px] flex">
          <p className="font-bold text-[14px] text-[#797979] leading-[24.18px] text-right w-1/2">تعداد محصول</p>
          <p className="text-left w-1/2 text-[#585858] text-[10px]">
            <span className="font-bold text-[16px]">{props.quantity}</span> عدد
          </p>
        </div>
        <div className="border-b-[1px] border-[#ECECEC] mb-[17px] "></div>
        <div className="mb-[17px] flex text-[#797979]">
          <p className="font-bold text-[14px]  leading-[24.18px] text-right w-1/2">جمع جزء:</p>
          <p className="text-left w-1/2 text-[10px]">
            <span className="font-bold text-[16px]">{props.price}</span> $
          </p>
        </div>
        <div className="mb-[17px] flex text-[#0098FF]">
          <p className="font-bold text-[14px]  leading-[24.18px] text-right w-1/2">جمع کل:</p>
          <p className="text-left w-1/2 text-[10px]">
            <span className="font-bold text-[16px]">{props.totalPrice}</span> $
          </p>
        </div>
        {
          props.checkoutMode === "firstMode"
          ?
          <>
            <div
            className="bg-[#1B262C] text-white w-full h-[63px] flex flex-col items-center rounded-[10px] cursor-pointer mb-[15px]"
            onClick={() => props.setCheckoutMode("firstMode")}
            >
              <p className="w-max mx-auto my-auto font-bold text-[14px] leading-[40px]">پرداخت خودکار با ارز دیجیتال</p>
            </div>
            <p className="font-bold text-[14px] text-[#515151] leading-[24.18px] mb-[10px]">لطفا ارز موردنظر را انتخاب کنید. *</p>
              <div
              className="flex bg-[#F3F3F3] w-full h-[63px] rounded-[10px] cursor-pointer  px-[23.14px]"
              onClick={() => setShowList(!showList)}
              >
                <div className="mt-[28.96px] mb-[28.18px] w-[13.2px]">
                <BuyListArrow />
                </div>
                  <p className="my-auto font-bold text-[14px] leading-[40px] text-left w-[calc(100%-13.2px)]">
                  {
                  props.thisCurrency ?
                  `${props.thisCurrency}`
                  :
                  ""
                  }
                  </p>
              </div>
              <div className="relative w-[336px]">
                <div className="absolute top-0 w-full h-max">
              {
                showList ?
                  props.currencies.map((item, index) => {
                    console.log(item)
                    return(
                        <CheckoutListProps
                        width="336px"
                        height="63px"
                        alignText="left"
                        listMode="currency"
                        item={item}
                        index={index}
                        thisCurrency={props.thisCurrency}
                        setThisCurrency={props.setThisCurrency}
                        setShowList={setShowList}
                        />
                        )
                      })
                      :
                      ""
                    }
                    </div>
                  </div>
            <div className="border-b-[1px] border-[#ECECEC] my-[15px] "></div>  
            </>
            :
            <div
            className="flex border-[1px] border-[#ECECEC] w-full h-[63px] rounded-[10px] cursor-pointer px-[23.14px] mb-[15px]"
            onClick={() => props.setCheckoutMode("firstMode")}
            >
              <p className="w-max mx-auto my-auto font-bold text-[14px] leading-[40px] text-[#C7C7C7]">پرداخت خودکار با ارز دیجیتال</p>
              </div>
        }
            {
          props.checkoutMode === "secondMode"
          ?
            <div
            className="bg-[#1B262C] text-white w-full h-[63px] flex flex-col items-center rounded-[10px] cursor-pointer mb-[15px]"
            onClick={() => props.setCheckoutMode("secondMode")}
            >
              <p className="w-max mx-auto my-auto font-bold text-[14px] leading-[40px]">پرداخت با Tether صرافی (TRC20)</p>
            </div>
            :
            <div
            className="flex border-[1px] border-[#ECECEC] w-full h-[63px] rounded-[10px] cursor-pointer  px-[23.14px]"
            onClick={() => props.setCheckoutMode("secondMode")}
            >
              <p className="w-max mx-auto my-auto font-bold text-[14px] leading-[40px] text-[#C7C7C7]">پرداخت با Tether صرافی (TRC20)</p>
              </div>
        }
      </div>
      <div className="h-max px-[17.5px] py-[20px] bg-white rounded-[10px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] flex">
        <input
        placeholder="کد تخفیف خود را وارد کنید"
        value={props.offCode}
        onChange={(e) => props.setOffCode(e.target.value)}
        className="outline-none text-[16px] w-[349px]"
        />
        <button className="font-bold text-[16px] text-[#0098FF] w-[29px]">ثبت</button>
      </div>
          <div
            className="bg-primary-btn-color hover:bg-secondary-btn-color text-white w-full h-[63px] flex flex-col items-center rounded-[10px] cursor-pointer"
            onClick={() => {
              if(!props.showNext) return next()
              props.submit()
              
            }}
            >
              {
                props.showNext ?
                <p className="w-max mx-auto my-auto font-bold text-[16px] leading-[40px] ">مرحله بعد (‌انتخاب پلتفرم)</p>
                :
                <p className="w-max mx-auto my-auto font-bold text-[16px] leading-[40px] ">ادامه فرایند خرید</p>
              }
            </div>
            <div
            className="bg-[#EFEFEF] w-full h-[63px] flex flex-col items-center rounded-[10px] cursor-pointer"
            onClick={() => {
              if(props.showNext) return props.setShowNext(false)
              props.setShowNext2(false)
            }}
            >
              <p className="w-max mx-auto my-auto font-bold text-[16px] leading-[40px]  text[#878787]">بازگشت به مرحله قبل</p>
            </div>
            <div className="font-bold text-[12px] text-red-500 leading-[24.18px]">
              {props.nextError}
            </div>
    </div>
  )
}

export default CheckoutSidebar