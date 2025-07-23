import { Button } from "../components/Button"
import Input from "../components/Input"
import React from "react";
import axios from "axios";
import { BackendUrl } from "../config";


const Signup = () => {
  const usernameRef = React.useRef<HTMLInputElement>();
  const passwordRef = React.useRef<HTMLInputElement>();
  
  async function signup(){
    const username= usernameRef.current?.value;
    const password= passwordRef.current?.value;
    await axios.post(BackendUrl + "/api/v1/signup", {
  username,
  password
});

   

  alert("User created successfully");
}


  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md w-[50%] max-w-sm p-6 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4 text-center ">Sign Up</h2>
        
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />

        <div className="mt-4 w-[63%] flex justify-center mb-4">
          <Button variant="primary" text="Submit" wfull={true} loading={false} onClick={signup}/>
        </div>
      </div>
    </div>
  )
}

export default Signup
