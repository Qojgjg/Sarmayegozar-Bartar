const PlansTable = () => {

  return (
    <div className="relative px-[72px] w-[1296px] h-[602px] mx-auto text-[#1B262C]">
      <div className="absolute w-full h-full top-0 left-0 bg-red-500 ">
        <div className="absolute overflow-hidden z-20 right-0 h-[507px] w-[196px] flex flex-col items-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)] rounded-[0px_20px_20px_20px]">
          <div className="bg-white w-full h-[82px] text-center text-[18px] font-extrabold">
            پلن ها <span className="font-light text-[14px] leading-[70px]">(یکبار پرداخت)</span>
          </div>
          <ul className="flex flex-col items-center p-0 w-full h-[425px]">
            <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px] border-t-[1px] border-[#F3F3F3]">
              <p className="leading-[70px] text-[13px] font-bold">تارگت مرحله اول</p>
            </li>
            <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
              <p className="leading-[70px] text-[13px] font-bold">تارگت مرحله دوم</p>
            </li>
            <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
              <p className="leading-[70px] text-[13px] font-bold">Daily Drawdown</p>
            </li>
            <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
              <p className="leading-[70px] text-[13px] font-bold">(12%) Maximum Drawdown</p>
            </li>
            <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
              <p className="leading-[70px] text-[13px] font-bold">رشد سرمایه</p>
            </li>
          </ul>
        </div>
        <div className="absolute right-[178px] z-10 bg-blue-500 w-[1118px] h-full overflow-hidden ">
          <div className="w-[186.33px] h-full bg-red-900">
            <div className="flex flex-col items-center">
             <div className="bg-[#F1F1F1] w-full h-[82px] text-center text-[24px] font-extrabold">
            5000 <span className="font-bold text-[16px] leading-[70px]">دلار</span>
             </div>
              <ul className="flex flex-col items-center p-0 w-full h-full">
              <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px] border-t-[1px] border-[#F3F3F3]">
                 <p className="leading-[70px] text-[13px] font-bold">$ 400</p>
              </li>
           </ul>
            </div> 
          </div>
        </div>
      </div>
     </div> 
  )
}

export default PlansTable