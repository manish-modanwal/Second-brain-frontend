import { BackendUrl } from "../config";
import CrossIcon from "../icons/CrossIcon"
import { Button } from "./Button"
import Input from "./Input";
import React from "react";
import { useRef } from "react";
import axios from "axios";

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

enum ContentType {
    Youtube= "youtube",
    Twitter = "twitter",
}

const CreateContentModal = ({open,onClose}:CreateContentModalProps) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = React.useState(ContentType.Youtube);

    function submit(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        if (!title || !link) {
            alert("Please fill in both fields");
            return;
        }

        axios.post(BackendUrl +"/api/v1/content", {
            title,
            link,
            type
        }, {
            headers: {
                Authorization: localStorage.getItem("jwt")
            }
        });

        alert("Content submitted successfully");
        onClose(); 
    }


    
  return (
    <div>
        {open &&<div className="w-screen h-screen bg-gray-300 fixed top-0 left-0 bg-opacity-60 flex  justify-center border-gray-400 border-2">
            <div className="  flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded-lg max-w-min">
                        <div className="flex justify-end cursor-pointer "
                            onClick={onClose}>
                            <CrossIcon></CrossIcon>
                        </div>
                        <div>
                            <Input ref={titleRef} placeholder={"Title"}></Input>
                            <Input ref={linkRef} placeholder={"Link"}></Input>
                        </div>
                        <div className="flex justify-center gap-2 mb-4">
                            <Button text="Youtube" variant={type === ContentType.Youtube?"primary":"secondary"} onClick={()=>{setType(ContentType.Youtube)}}></Button>
                            <Button text="Twitter" variant={type === ContentType.Twitter?"primary":"secondary"} onClick={()=>{setType(ContentType.Twitter)}}></Button>
                        </div>
                        <div className="flex justify-center ">
                            <Button variant="primary" text="submit" onClick={submit}></Button>
                        </div>
                        
                </span>
            </div>

    </div>}
    </div>
    
  )
}



export default CreateContentModal