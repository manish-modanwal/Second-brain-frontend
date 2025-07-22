import CrossIcon from "../icons/CrossIcon"
import { Button } from "./Button"

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}


const CreateContentModal = ({open,onClose}:CreateContentModalProps) => {
  return (
    <div>
        {open &&<div className="w-screen h-screen bg-gray-300 fixed top-0 left-0 opacity-60 flex  justify-center">
            <div className="  flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded-lg max-w-min">
                        <div className="flex justify-end cursor-pointer "
                            onClick={onClose}>
                            <CrossIcon></CrossIcon>
                        </div>
                        <div>
                            <Input placeholder={"Title"}></Input>
                            <Input placeholder={"Link"}></Input>
                        </div>
                        <div className="flex justify-center ">
                            <Button variant="primary" text="submit"></Button>
                        </div>
                        
                </span>
            </div>

    </div>}
    </div>
    
  )
}


function Input({onChange, placeholder}: {onChange:()=> void, placeholder?: string})
{
    return(
        <input placeholder={placeholder} type={"text"} onChange={onChange} className="px-4 py-2 border rounded m-2" ></input>
    )
}

export default CreateContentModal