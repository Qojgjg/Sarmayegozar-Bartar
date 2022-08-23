import platformIconFirst from "../../assets/png/PlatformIcon1Black.png"
import platformIconSecond from "../../assets/png/PlatformIcon2Black.png"
import activePlatformIconFirst from "../../assets/png/PlatformIcon1.png"
import activePlatformIconSecond from "../../assets/png/PlatformIcon2.png"
import BuyBrokIconFirst from "../../assets/svg/BuyBrokIconFirst"
import BuyBrokIconSecond from "../../assets/svg/BuyBrokIconSecond"
import BuyBrokIconThird from "../../assets/png/BrokIconThird.png"
import BuyBrokIconForthActive from "../../assets/png/BrokIconForth.png"
import BuyBrokIconForth from "../../assets/png/BrokIconForthBlack.png"
import BuyBrokIconFifth from "../../assets/svg/BuyBrokIconFifth"
import BuyBrokIconLastActive from "../../assets/png/BrokIconLast.png"
import BuyBrokIconLast from "../../assets/png/BrokIconLastBlack.png"
import CheckoutSidebar from "./CheckoutSidebar"
import BuyCheckRule from "../../assets/svg/BuyCheckRule"

const CheckoutFirst = (props) => {

  return (
    <div className=" border-b-[1px] border-[#E2E2E2] mx-[72px]">
    <div className="flex gap-6 bg-white w-[1296px] mt-[20px] mx-auto">
      <div className="w-[856px] h-max bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] px-[30px] mb-[792px]">
        <p className="my-[30px] font-extrabold text-[18px] leading-[31.09px] text-[#797979]">جزئیات صورتحساب</p>
        <div className="border-b-[1px] border-[#ECECEC] mb-[30px]"></div>
        <div className="mb-[30px]">
          <p className="font-bold text-[14px] text-[#515151] leading-[24.18px] mb-[10px]">پلتفرم موردنظر را انتخاب کنید</p>
          <div className="flex gap-[10px]">
            <div
            className={`${props.platform === "metatrader5" ? "bg-[#1B262C]" : "bg-white border-[1px] border-[#C7C7C7]"} w-1/2 h-[63px] rounded-[10px] px-[118px] py-[10px] cursor-pointer`}
            onClick={() => props.setPlatform("metatrader5")}
            >
              <img src={props.platform === "metatrader5" ? activePlatformIconFirst : platformIconFirst}></img>
            </div>
            <div
            className={`${props.platform === "metatrader4" ? "bg-[#1B262C]" : "bg-white border-[1px] border-[#C7C7C7]"} w-1/2 h-[63px] rounded-[10px] px-[118px] py-[10px] cursor-pointer`}
            onClick={() => props.setPlatform("metatrader4")}
            >
              <img src={props.platform === "metatrader4" ? activePlatformIconSecond : platformIconSecond}></img>
            </div>
          </div>
        </div>
        <div>
        <p className="font-bold text-[14px] text-[#515151] leading-[24.18px] mb-[10px]">بروکر موردنظر را انتخاب کنید</p>
        <div className="flex gap-[10px] mb-[10px]">
            <div
            className={`${props.brok === "icMarkets" ? "bg-[#1B262C]" : "bg-white border-[1px] border-[#C7C7C7]"} w-[258.67px] h-[63px] rounded-[10px] px-[55.83px] pt-[20px] cursor-pointer`}
            onClick={() => props.setBrok("icMarkets")}
            >
              <BuyBrokIconFirst 
              color={props.brok === "icMarkets" ? "white": "black"}
              />
            </div>
            <div
            className={`${props.brok === "fusionMarkets" ? "bg-[#1B262C]" : "bg-white border-[1px] border-[#C7C7C7]"} w-[258.67px] h-[63px] rounded-[10px] px-[90.83px] py-[15.5px] cursor-pointer`}
            onClick={() => props.setBrok("fusionMarkets")}
            >
              <BuyBrokIconSecond />
            </div>
            <div
            className={`${props.brok === "eightcap" ? "bg-[#1B262C]" : "bg-white border-[1px] border-[#C7C7C7]"} w-[258.67px] h-[63px] rounded-[10px] px-[62.83px] py-[18.5px] cursor-pointer`}
            onClick={() => props.setBrok("eightcap")}
            >
              <img src={BuyBrokIconThird}></img>
            </div>
          </div>
          <div className="flex gap-[10px] mb-[30px]">
            <div
            className={`${props.brok === "aMarkets" ? "bg-[#1B262C]" : "bg-white border-[1px] border-[#C7C7C7]"} w-[258.67px] h-[63px] rounded-[10px] px-[82.33px] py-[4px] cursor-pointer`}
            onClick={() => props.setBrok("aMarkets")}
            >
              <img src={props.brok === "aMarkets" ? BuyBrokIconForthActive : BuyBrokIconForth}
              />
            </div>
            <div
            className={`${props.brok === "roboForex" ? "bg-[#1B262C]" : "bg-white border-[1px] border-[#C7C7C7]"} w-[258.67px] h-[63px] rounded-[10px] px-[53.12px] py-[20.5px] cursor-pointer`}
            onClick={() => props.setBrok("roboForex")}
            >
              <BuyBrokIconFifth />
            </div>
            <div
            className={`${props.brok === "exness" ? "bg-[#1B262C]" : "bg-white border-[1px] border-[#C7C7C7]"} w-[258.67px] h-[63px] rounded-[10px] px-[96.83px] py-[10.5px] cursor-pointer`}
            onClick={() => props.setBrok("exness")}
            >
              <img src={props.brok === "exness" ? BuyBrokIconLastActive : BuyBrokIconLast}></img>
            </div>
          </div>
        </div>
        <div>
        <p className="font-bold text-[14px] text-[#515151] leading-[24.18px] mb-[10px]">نوع حساب موردنظر را انتخاب کنید</p>
          <div className="flex gap-[10px] mb-[30px]">
            <div 
            className={`${props.account === "ecnOrRaw" ? "bg-[#1B262C] text-white" : "bg-white text-[#1B262C] border-[1px] border-[#C7C7C7]"} w-1/2 h-[63px] flex flex-col items-center rounded-[10px] cursor-pointer`}
            onClick={() => props.setAccount("ecnOrRaw")}
            >
              <p className="w-max mx-auto my-auto font-bold text-[14px] leading-[40px]">ECN or Raw</p>
            </div>
            <div 
            className={`${props.account === "standard" ? "bg-[#1B262C] text-white" : "bg-white text-[#1B262C] border-[1px] border-[#C7C7C7]"} w-1/2 h-[63px] flex flex-col items-center rounded-[10px] cursor-pointer`}
            onClick={() => props.setAccount("standard")}
            >
              <p className="w-max mx-auto my-auto font-bold text-[14px] leading-[40px]">Standard</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex gap-[12px] mb-[30px]">
          <div
          className={`${props.ruleCheckFirst ? "bg-[#0098FF]" : "bg-white"} w-[20px] h-[20px] border-[1.5px] border-[#E4E4E4] rounded-[6px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] cursor-pointer`}
          onClick={() => props.setRuleCheckFirst(!props.ruleCheckFirst)}
          >
              {
                props.ruleCheckFirst ?
                <div className="w-max mx-auto my-[5px]">
                  <BuyCheckRule />
                </div>
                :
                ""
              }
            </div>
            <div>
            <p
            className="font-bold text-[14px] text-[#515151] leading-[24.18px] cursor-pointer"
            onClick={() => props.setRuleCheckFirst(!props.ruleCheckFirst)}
            >بروکر موردنظر توسط تریدر تست شده و سرمایه گذار برتر هیچ مسئولیتی در قبال آن ندارد. *</p>
            </div>
          </div>
          <div className="flex gap-[12px]">
          <div
          className={`${props.ruleCheckSecond ? "bg-[#0098FF]" : "bg-white"} w-[20px] h-[20px] border-[1.5px] border-[#E4E4E4] rounded-[6px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] cursor-pointer`}
          onClick={() => props.setRuleCheckSecond(!props.ruleCheckSecond)}
          >
              {
                props.ruleCheckSecond ?
                <div className="w-max mx-auto my-[5px]">
                  <BuyCheckRule />
                </div>
                :
                ""
              }
            </div>
            <div>
            <p
            className="font-bold text-[14px] text-[#515151] leading-[24.18px] cursor-pointer"
            onClick={() => props.setRuleCheckSecond(!props.ruleCheckSecond)}
            >
              قوانین را مطالعه کرده و شرایط پلن ها را میپذیرم. *
            </p>
            </div>
          </div>
        </div>
        <div className="mb-[40px] mt-[10px] font-bold text-[12px] text-red-500 leading-[24.18px]">
          {props.ruleError}
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
      />
    </div>
    </div>
  )
}

export default CheckoutFirst