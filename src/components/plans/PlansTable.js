import PlansArrowButton from "../../assets/svg/PlansArrowButton";
import { useNavigate } from "react-router-dom";

const PlansTable = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[723px] border-b-[1px] border-[#E2E2E2] mx-[72px]">
      <div className="relative px-[72px] w-[1296px] h-[602px] mx-auto text-[#1B262C]">
        <div className="absolute w-full h-full top-0 left-0 ">
          <div className="absolute overflow-hidden z-20 right-0 h-[507px] w-[196px] flex flex-col items-center shadow-[5px_5px_40px_rgba(0,0,0,0.05)] rounded-[0px_20px_20px_20px]">
            <div className="bg-white w-full h-[82px] text-center text-[18px] font-extrabold">
              پلن ها{" "}
              <span className="font-light text-[14px] leading-[70px]">
                (یکبار پرداخت)
              </span>
            </div>
            <ul className="flex flex-col items-center p-0 w-full h-[425px]">
              <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px] border-t-[1px] border-[#F3F3F3]">
                <p className="leading-[70px] text-[13px] font-bold">
                  تارگت مرحله اول
                </p>
              </li>
              <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                <p className="leading-[70px] text-[13px] font-bold">
                  تارگت مرحله دوم
                </p>
              </li>
              <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                <p className="leading-[70px] text-[13px] font-bold">
                  Daily Drawdown
                </p>
              </li>
              <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                <p className="leading-[70px] text-[13px] font-bold">
                  (12%) Maximum Drawdown
                </p>
              </li>
              <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                <p className="leading-[70px] text-[13px] font-bold">
                  رشد سرمایه
                </p>
              </li>
            </ul>
          </div>
          <div className="absolute flex right-[178px] z-10 w-[1118px] h-full shadow-[5px_5px_40px_rgba(0,0,0,0.05)] bg-[#f6f6f6] rounded-tl-[20px]">
            <div className="w-[186.33px] h-full ">
              <div className="flex flex-col items-center">
                <div className="bg-[#F1F1F1] w-full h-[82px] text-center text-[24px] font-extrabold">
                  ۵,۰۰۰{" "}
                  <span className="font-bold text-[16px] leading-[70px]">
                    دلار
                  </span>
                </div>
                <ul className="flex flex-col items-center p-0 w-full h-full rounded-br-[20px] overflow-hidden">
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px] border-t-[1px] border-[#F3F3F3]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۴۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۲۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۵ درصد
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۴,۴۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      تا سقف ۱,۰۰۰۰۰۰ $
                    </p>
                  </li>
                  <li className="bg-white w-full pt-[10px] pb-[37px] text-center">
                    <button
                      onClick={() => navigate("/buy")}
                      className="rounded-[10px] text-white flex mx-auto items-center text-center bg-primary-btn-color hover:bg-secondary-btn-color w-[116.33px] h-[47px]"
                    >
                      <span className="w-max mr-[21.67px] ml-[19.25px] text-[16px] font-bold">
                        ۶۶ دلار
                      </span>
                      <span className="w-max">
                        <PlansArrowButton />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[186.33px] h-full ">
              <div className="flex flex-col items-center">
                <div className="bg-[#F1F1F1] w-full h-[82px] text-center text-[24px] font-extrabold">
                  ۱۰,۰۰۰{" "}
                  <span className="font-bold text-[16px] leading-[70px]">
                    دلار
                  </span>
                </div>
                <ul className="flex flex-col items-center p-0 w-full h-full">
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px] border-t-[1px] border-[#F3F3F3]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۴۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۲۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۵ درصد
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۴,۴۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      تا سقف ۱,۰۰۰۰۰۰ $
                    </p>
                  </li>
                  <li className="bg-white w-full pt-[10px] pb-[37px] text-center">
                    <button
                      onClick={() => navigate("/buy")}
                      className=" rounded-[10px] text-white flex mx-auto items-center text-center bg-primary-btn-color hover:bg-secondary-btn-color w-[116.33px] h-[47px]"
                    >
                      <span className="w-max mr-[21.67px] ml-[19.25px] text-[16px] font-bold">
                        ۸۸ دلار
                      </span>
                      <span className="w-max">
                        <PlansArrowButton />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[186.33px] h-full ">
              <div className="flex flex-col items-center">
                <div className="bg-[#F1F1F1] w-full h-[82px] text-center text-[24px] font-extrabold">
                  ۲۵,۰۰۰{" "}
                  <span className="font-bold text-[16px] leading-[70px]">
                    دلار
                  </span>
                </div>
                <ul className="flex flex-col items-center p-0 w-full h-full">
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px] border-t-[1px] border-[#F3F3F3]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۴۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۲۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۵ درصد
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۴,۴۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      تا سقف ۱,۰۰۰۰۰۰ $
                    </p>
                  </li>
                  <li className="bg-white w-full pt-[10px] pb-[37px] text-center">
                    <button
                      onClick={() => navigate("/buy")}
                      className=" rounded-[10px] text-white flex mx-auto items-center text-center bg-primary-btn-color hover:bg-secondary-btn-color w-[116.33px] h-[47px]"
                    >
                      <span className="w-max mr-[21.67px] ml-[19.25px] text-[16px] font-bold">
                        ۱۵۷ دلار
                      </span>
                      <span className="w-max">
                        <PlansArrowButton />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[186.33px] h-full ">
              <div className="flex flex-col items-center">
                <div className="bg-[#F1F1F1] w-full h-[82px] text-center text-[24px] font-extrabold">
                  ۵۰,۰۰۰{" "}
                  <span className="font-bold text-[16px] leading-[70px]">
                    دلار
                  </span>
                </div>
                <ul className="flex flex-col items-center p-0 w-full h-full">
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px] border-t-[1px] border-[#F3F3F3]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۴۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۲۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۵ درصد
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۴,۴۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      تا سقف ۱,۰۰۰۰۰۰ $
                    </p>
                  </li>
                  <li className="bg-white w-full pt-[10px] pb-[37px] text-center">
                    <button
                      onClick={() => navigate("/buy")}
                      className=" rounded-[10px] text-white flex mx-auto items-center text-center bg-primary-btn-color hover:bg-secondary-btn-color w-[116.33px] h-[47px]"
                    >
                      <span className="w-max mr-[21.67px] ml-[19.25px] text-[16px] font-bold">
                        ۳۱۴ دلار
                      </span>
                      <span className="w-max">
                        <PlansArrowButton />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[186.33px] h-full ">
              <div className="flex flex-col items-center">
                <div className="bg-[#F1F1F1] w-full h-[82px] text-center text-[24px] font-extrabold">
                  ۱۰۰,۰۰۰{" "}
                  <span className="font-bold text-[16px] leading-[70px]">
                    دلار
                  </span>
                </div>
                <ul className="flex flex-col items-center p-0 w-full h-full">
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px] border-t-[1px] border-[#F3F3F3]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۴۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۲۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۵ درصد
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۴,۴۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      تا سقف ۱,۰۰۰۰۰۰ $
                    </p>
                  </li>
                  <li className="bg-white w-full pt-[10px] pb-[37px] text-center">
                    <button
                      onClick={() => navigate("/buy")}
                      className=" rounded-[10px] text-white flex mx-auto items-center text-center bg-primary-btn-color hover:bg-secondary-btn-color w-[116.33px] h-[47px]"
                    >
                      <span className="w-max mr-[21.67px] ml-[19.25px] text-[16px] font-bold">
                        ۵۰۲ دلار
                      </span>
                      <span className="w-max">
                        <PlansArrowButton />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[186.33px] h-full">
              <div className="flex flex-col items-center">
                <div className="bg-[#F1F1F1] w-full h-[82px] text-center text-[24px] font-extrabold rounded-tl-[20px]">
                  ۲۰۰,۰۰۰{" "}
                  <span className="font-bold text-[16px] leading-[70px]">
                    دلار
                  </span>
                </div>
                <ul className="flex flex-col items-center p-0 w-full h-full rounded-bl-[20px] overflow-hidden">
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px] border-t-[1px] border-[#F3F3F3]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۴۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۲۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۵ درصد
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-[#F1F1F1] w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      ۴,۴۰۰ $
                    </p>
                  </li>
                  <li className="flex justify-center gap-[10px] px-[10px] bg-white w-full py-[7.5px]">
                    <p className="leading-[70px] text-[13px] font-bold">
                      تا سقف ۱,۰۰۰۰۰۰ $
                    </p>
                  </li>
                  <li className="bg-white w-full pt-[10px] pb-[37px] text-center">
                    <button
                      onClick={() => navigate("/buy")}
                      className="rounded-[10px] text-white flex mx-auto items-center text-center bg-primary-btn-color hover:bg-secondary-btn-color w-[116.33px] h-[47px]"
                    >
                      <span className="w-max mr-[21.67px] ml-[19.25px] text-[16px] font-bold">
                        ۸۵۸ دلار
                      </span>
                      <span className="w-max">
                        <PlansArrowButton />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansTable;
