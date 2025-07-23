function Input({ placeholder, ref}: {ref ?:any, placeholder?: string})
{
    return(
        <input ref={ref} placeholder={placeholder} type={"text"}  className="px-4 py-2 border-gray-400 rounded m-2 bg-gray-100 " ></input>
    )
}

export default Input;