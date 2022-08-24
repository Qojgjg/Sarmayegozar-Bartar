import Checkout from "../components/buy/Checkout";
import InfoHeader from "../components/buy/InfoHeader";
import useTitle from "../hooks/useTitle";

const Buy = () => {
  useTitle("خرید")

  return (
    <>
      <InfoHeader />
      <Checkout />
    </>
  );
};

export default Buy;
