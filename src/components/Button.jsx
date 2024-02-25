
const Button = (props) =>(
    <button className={`capitalize hover:font-bold transition-all
     rounded-[10px] border-solid border-2 border-black bg-inherit w-full
      py-[10px] px-[20px]  text-black hover:bg-[#000] hover:text-white cursor-pointer `}>
        {props.value}
    </button>
)

export default Button
