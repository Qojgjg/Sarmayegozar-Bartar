import BuyHeaderIconFirst from "../../assets/svg/BuyHeaderIconFirst"
import BuyHeaderIconLast from "../../assets/svg/BuyHeaderIconLast"
import BuyHeaderIconSecond from "../../assets/svg/BuyHeaderIconSecond"

const InfoHeader = () => {
  return(

    <div className="w-full relative bg-secondary-bg-color px-[72px] mb-[63px]">
     <div className="w-full h-[1px] bg-[#495156]" />
     <div className="text-center mt-[40px]">
      <h3 className="text-white text-[32px] font-extrabold pb-[99px]">
      روند خرید پلن
      </h3>
      <div className="absolute top-[212px] left-[calc(50%-648px)] w-[1296px] h-[88px]">
          <div className=" flex justify-center items-center py-[15px] px-[30px] mx-auto bg-white rounded-[20px] shadow-[5px_5px_40px_rgba(0,0,0,0.05)] mt-[-72px]">
            <div className="flex gap-[100px] justify-center items-center">
              <BuyHeaderIconFirst />
              <BuyHeaderIconSecond />
              <BuyHeaderIconLast />
            </div>
          </div>
      </div>
      </div>
      </div>
  )
}

export default InfoHeader