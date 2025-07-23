import { Button } from "../components/Button";
import Input from "../components/Input";
import React from "react";
import axios from "axios";
import { BackendUrl } from "../config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate(); // ✅

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response = await axios.post(BackendUrl + "/api/v1/signin", {
        username,
        password,
      });

      const jwt = response.data.token;
      localStorage.setItem("jwt", jwt);
      alert("User signed in successfully");

      navigate("/dashboard"); // ✅ Correct
    } catch (err) {
      console.error("Signin error:", err);
      alert("Signin failed");
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md w-[50%] max-w-sm p-6 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4 text-center ">Sign In</h2>

        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />

        <div className="mt-4 w-[63%] flex justify-center mb-4">
          <Button
            variant="primary"
            text="SignIn"
            wfull={true}
            loading={false}
            onClick={signin}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
