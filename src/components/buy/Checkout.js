import { useState, useEffect } from "react"
import CheckoutFirst from "./CheckoutFirst"
import CheckoutSecond from "./CheckoutSecond"


const Checkout = () => {
  const [showNext, setShowNext] = useState(false)
  const [platform, setPlatform] = useState("metatrader5")
  const [brok, setBrok] = useState("icMarkets")
  const [account, setAccount] = useState("ecnOrRaw")
  const [ruleCheckFirst, setRuleCheckFirst] = useState(false)
  const [ruleCheckSecond, setRuleCheckSecond] = useState(false)
  const [ruleError, setRuleError] = useState("")
  const [quantity, setQuantity] = useState("۲")
  const [price, setPrice] = useState("۱۵۰,۰۰۰")
  const [totalPrice, setTotalPrice] = useState("۱۵۰,۰۰۰")
  const [checkoutMode, setCheckoutMode] = useState("firstMode")
  const [currencies, setCurrencies] = useState(["Litecoin (1.070957 LTC)", "Litecoin (1.070957 LTC)", "Litecoin (1.070957 LTC)"])
  const [thisCurrency, setThisCurrency] = useState(null)
  const [offCode, setOffCode] = useState("")
  const [nextError, setNextError] = useState("")

  const [showNext2, setShowNext2] = useState(false)
  const [checkoutList, setCheckoutList] = useState({
    email: "",
    country:"",
    state: "none",
    city: "",
    address1: "",
    address2: "none",
    postcode: "none",
    phone: "none",
    mobile: "",
    password: "",
    description: "",
    marketer:"none"
  })

  useEffect(() => {
    if(ruleCheckFirst && ruleCheckSecond)
    setRuleError("")
    if(thisCurrency)
    return setNextError("")
  }, [ruleCheckFirst, ruleCheckSecond, thisCurrency])

  const submit = () => {
    Object.values(checkoutList).forEach(item => {
      if(!item) return setNextError("لطفا پیش از ادامه ورودی های خود را کنترل کنید!")
      setNextError("")
    });
    
  }

  if(showNext) return <CheckoutSecond 
    setShowNext={setShowNext}
    showNext={showNext}
    setRuleError={setRuleError}
    quantity={quantity}
    price={price}
    totalPrice={totalPrice}
    currencies={currencies}
    setCurrencies={setCurrencies}
    thisCurrency={thisCurrency}
    setThisCurrency={setThisCurrency}
    checkoutMode={checkoutMode}
    setCheckoutMode={setCheckoutMode}
    offCode={offCode}
    setOffCode={setOffCode}
    ruleCheckFirst={ruleCheckFirst}
    ruleCheckSecond={ruleCheckSecond}
    nextError={nextError}
    setNextError={setNextError}
    
    showNext2={showNext2}
    setShowNext2={setShowNext2}
    checkoutList={checkoutList}
    setCheckoutList={setCheckoutList}
    submit={submit}
  />

  return <CheckoutFirst 
  showNext={showNext}
  setShowNext={setShowNext}
  platform={platform}
  setPlatform={setPlatform}
  brok={brok}
  setBrok={setBrok}
  account={account}
  setAccount={setAccount}
  ruleCheckFirst={ruleCheckFirst}
  setRuleCheckFirst={setRuleCheckFirst}
  ruleCheckSecond={ruleCheckSecond}
  setRuleCheckSecond={setRuleCheckSecond}
  ruleError={ruleError}
  setRuleError={setRuleError}
  quantity={quantity}
  price={price}
  totalPrice={totalPrice}
  currencies={currencies}
  setCurrencies={setCurrencies}
  thisCurrency={thisCurrency}
  setThisCurrency={setThisCurrency}
  checkoutMode={checkoutMode}
  setCheckoutMode={setCheckoutMode}
  offCode={offCode}
  setOffCode={setOffCode}
  nextError={nextError}
  setNextError={setNextError}

  showNext2={showNext2}
  setShowNext2={setShowNext2}
  submit={submit}
  />
}

export default Checkout