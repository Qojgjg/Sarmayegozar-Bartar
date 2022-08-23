const CheckoutListProps = (props) => {

  return(
    <ul className={`w-[${props.width}] text-${props.alignText} rounded-b-[10px] overflow-hidden mt-[-10px]`}>
      <li
      className={`h-[${props.height}] flex items-center w-full font-bold text-[14px] leading-[40px] bg-[#F3F3F3] hover:bg-[#1B262C] hover:text-white cursor-pointer px-[23.14px]`}
      onClick={() => {
        if(props.listMode === "currency")
        {
          props.setShowList(false)
          return props.setThisCurrency(props.item)
      }
      }}
      >
        <p className="w-full">{props.item}</p>
      </li>
    </ul>
  )
}

export default CheckoutListProps