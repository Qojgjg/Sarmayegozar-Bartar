import React, { useState } from "react";
import TablePlanDetails from "./TablePlanDetails";
import ArrowDown from "../../assets/svg/ArrowDown";
import ArrowTop from "../../assets/svg/ArrowTop";

const SarmayegozarPlan = () => {
  const [isTableDetails, setIsTableDetails] = useState({
    isInvestmentPeriod: false,
    isMinTraidingDays: false,
    isMaxDailyLoss: false,
    isMaxLoss: false,
    isBenefitTarget: false,
    isRefundableFee: false,
  });

  // console.log(isTableDetails);

  return (
    <main className="w-full bg-secondary-bg-color px-[72px] py-[66px]">
      <div className="text-center text-white mb-[36px]">
        <h2 className="text-5xl leading-[70px] mb-[14px]">
          <p className="font-extrabold">پلن های</p>
          <p className="font-light">سرمایه گذار برتر</p>
        </h2>
        <p className="w-[636px] mx-auto text-[19px] font-medium leading-[40px]">
          سرمایه گذار برتر در راستای تامین سرمایه معامله گران برای ترید در
          بازارهای مالی با حداقل ریسک ممکن تشکیل شده و در این راه خدماتی را به
          تریدرها ارائه میکند.
        </p>
      </div>
      <div className="text-center text-white mb-[129px]">
        <p className="text-lg font-extrabold mb-3">انتخاب مقدار</p>
        <div className="flex justify-center items-center gap-[25px]">
          <button className="w-[164px] border border-white rounded-[10px] hover:bg-primary-bg-color hover:text-secondary-bg-color transition-all px-[30px] py-[18px]">
            5000 $
          </button>
          <button className="w-[164px] border border-white rounded-[10px] hover:bg-primary-bg-color hover:text-secondary-bg-color transition-all px-[30px] py-[18px]">
            10,000 $
          </button>
          <button className="w-[164px] border border-white rounded-[10px] hover:bg-primary-bg-color hover:text-secondary-bg-color transition-all px-[30px] py-[18px]">
            25,000 $
          </button>
          <button className="w-[164px] border border-white rounded-[10px] hover:bg-primary-bg-color hover:text-secondary-bg-color transition-all px-[30px] py-[18px]">
            50,000 $
          </button>
          <button className="w-[164px] border border-white rounded-[10px] hover:bg-primary-bg-color hover:text-secondary-bg-color transition-all px-[30px] py-[18px]">
            100,000 $
          </button>
          <button className="w-[164px] border border-white rounded-[10px] hover:bg-primary-bg-color hover:text-secondary-bg-color transition-all px-[30px] py-[18px]">
            200,000 $
          </button>
        </div>
      </div>
      <section className="flex justify-center mb-[56px]">
        <table className="rounded-[20px] rounded-tr-[0] text-center">
          <thead>
            <tr className="bg-white">
              <th className="w-[330px] h-[101.5px] text-center bg-secondary-bg-color font-extrabold text-5xl border-l">
                <p className="custom-gradient">توضیحات پلن</p>
              </th>
              <th className="w-[330px] h-[101.5px] relative leading-[30px] border-l">
                <div className="absolute flex flex-col justify-center w-[76px] h-[76px] bg-white rounded-full shadow-[5px_5px_40px_rgba(0,0,0,0.05)] -top-1/2 left-1/2 -translate-x-1/2">
                  <div className="text-primary-btn-color text-[40px] font-medium">
                    1
                  </div>
                </div>
                <div className="text-sm font-medium text-secondary-bg-color">
                  مرحله اول
                </div>
                <div className="text-xl font-extrabold text-primary-btn-color">
                  چالش سرمایه
                </div>
              </th>
              <th className="w-[330px] h-[101.5px] relative leading-[30px] border-l-[0.5px]">
                <div className="absolute flex flex-col justify-center w-[76px] h-[76px] bg-white rounded-full shadow-[5px_5px_40px_rgba(0,0,0,0.05)] -top-1/2 left-1/2 -translate-x-1/2">
                  <div className="text-primary-btn-color text-[40px] font-medium">
                    2
                  </div>
                </div>
                <div className="text-sm font-medium text-secondary-bg-color">
                  مرحله دوم
                </div>
                <div className="text-xl font-extrabold text-primary-btn-color">
                  احراز هویت
                </div>
              </th>
              <th className="w-[330px] h-[101.5px] relative leading-[30px]">
                <div className="absolute flex flex-col justify-center w-[76px] h-[76px] bg-white rounded-full shadow-[5px_5px_40px_rgba(0,0,0,0.05)] -top-1/2 left-1/2 -translate-x-1/2">
                  <div className="text-primary-btn-color text-[40px] font-medium">
                    3
                  </div>
                </div>
                <div className="text-sm font-medium text-secondary-bg-color">
                  مرحله سوم
                </div>
                <div className="text-xl font-extrabold text-primary-btn-color">
                  ترید با سرمایه
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className={`odd:bg-[#F5F5F5] even:bg-white ${
                isTableDetails.isInvestmentPeriod ? "" : ""
              }`}
            >
              <td className="w-[330px] h-[101.5px] flex justify-between items-center px-[40px] border-l drop-shadow-[5px_5px_40px_rgba(0,0,0,0.05)]">
                <p className="text-lg font-extrabold">دوره سرمایه گذاری</p>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setIsTableDetails({
                      ...isTableDetails,
                      isInvestmentPeriod: !isTableDetails.isInvestmentPeriod,
                    })
                  }
                >
                  {isTableDetails.isInvestmentPeriod ? (
                    <ArrowTop />
                  ) : (
                    <ArrowDown />
                  )}
                </div>
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium border-l">
                30 روزه
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium border-l-[0.5px]">
                30 روزه
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium">
                30 روزه
              </td>
            </tr>
            {isTableDetails.isInvestmentPeriod ? (
              <tr>
                <td colSpan={4}>
                  <TablePlanDetails />
                </td>
              </tr>
            ) : null}
            <tr className="odd:bg-[#F5F5F5] even:bg-white">
              <td className="w-[330px] h-[101.5px] flex justify-between items-center px-[40px] border-l">
                <p className="text-lg font-extrabold">حداقل روزهای معاملاتی</p>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setIsTableDetails({
                      ...isTableDetails,
                      isMinTraidingDays: !isTableDetails.isMinTraidingDays,
                    })
                  }
                >
                  {isTableDetails.isMinTraidingDays ? (
                    <ArrowTop />
                  ) : (
                    <ArrowDown />
                  )}
                </div>
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium border-l">
                10 روزه
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium border-l-[0.5px]">
                10 روزه
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium">
                10 روزه
              </td>
            </tr>
            {isTableDetails.isMinTraidingDays ? (
              <tr>
                <td colSpan={4}>
                  <TablePlanDetails />
                </td>
              </tr>
            ) : null}
            <tr className="odd:bg-[#F5F5F5] even:bg-white">
              <td className="w-[330px] h-[101.5px] flex justify-between items-center px-[40px] border-l">
                <p className="text-lg font-extrabold">حداکثر ضرر روزانه</p>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setIsTableDetails({
                      ...isTableDetails,
                      isMaxDailyLoss: !isTableDetails.isMaxDailyLoss,
                    })
                  }
                >
                  {isTableDetails.isMaxDailyLoss ? <ArrowTop /> : <ArrowDown />}
                </div>
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium border-l">
                30 روزه
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium border-l-[0.5px]">
                30 روزه
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium">
                30 روزه
              </td>
            </tr>
            {isTableDetails.isMaxDailyLoss ? (
              <tr>
                <td colSpan={4}>
                  <TablePlanDetails />
                </td>
              </tr>
            ) : null}
            <tr className="odd:bg-[#F5F5F5] even:bg-white">
              <td className="w-[330px] h-[101.5px] flex justify-between items-center px-[40px] border-l">
                <p className="text-lg font-extrabold">حداکثر ضرر</p>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setIsTableDetails({
                      ...isTableDetails,
                      isMaxLoss: !isTableDetails.isMaxLoss,
                    })
                  }
                >
                  {isTableDetails.isMaxLoss ? <ArrowTop /> : <ArrowDown />}
                </div>
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium border-l">
                500 $
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium border-l-[0.5px]">
                500 $
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium">
                500 $
              </td>
            </tr>
            {isTableDetails.isMaxLoss ? (
              <tr>
                <td colSpan={4}>
                  <TablePlanDetails />
                </td>
              </tr>
            ) : null}
            <tr className="odd:bg-[#F5F5F5] even:bg-white">
              <td className="w-[330px] h-[101.5px] flex justify-between items-center px-[40px] border-l">
                <p className="text-lg font-extrabold">هدف سود</p>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setIsTableDetails({
                      ...isTableDetails,
                      isBenefitTarget: !isTableDetails.isBenefitTarget,
                    })
                  }
                >
                  {isTableDetails.isBenefitTarget ? (
                    <ArrowTop />
                  ) : (
                    <ArrowDown />
                  )}
                </div>
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium border-l">
                1000 $
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium border-l-[0.5px]">
                1000 $
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium">
                1000 $
              </td>
            </tr>
            {isTableDetails.isBenefitTarget ? (
              <tr>
                <td colSpan={4}>
                  <TablePlanDetails />
                </td>
              </tr>
            ) : null}
            <tr className="">
              <td className="w-[330px] h-[101.5px] flex justify-between items-center px-[40px] border-l bg-white">
                <p className="text-lg font-extrabold">هزینه قابل استرداد</p>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setIsTableDetails({
                      ...isTableDetails,
                      isRefundableFee: !isTableDetails.isRefundableFee,
                    })
                  }
                >
                  {isTableDetails.isRefundableFee ? (
                    <ArrowTop />
                  ) : (
                    <ArrowDown />
                  )}
                </div>
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium border-l bg-white">
                30 روزه
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium border-l-[0.5px] bg-white">
                30 روزه
              </td>
              <td className="w-[330px] h-[101.5px] text-lg font-medium bg-white">
                30 روزه
              </td>
            </tr>
            {isTableDetails.isRefundableFee ? (
              <tr>
                <td colSpan={4}>
                  <TablePlanDetails />
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </section>
      <div className="flex flex-col justify-center items-center space-y-[23px]">
        <p className="text-white text-[34px] font-extrabold">
          برای ترید آماده هستید؟
        </p>
        <button className="bg-primary-btn-color text-white hover:bg-secondary-btn-color transition-all rounded-[10px] px-[60px] py-[11px]">
          ثبت سفارش پلن
        </button>
      </div>
    </main>
  );
};

export default SarmayegozarPlan;
