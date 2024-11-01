import { useState } from "react";
import Lablebox from "./Lablebox";
import {signinParams} from "@niranjan1309/common";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MordernButton from "./MordernButton";
export default function Signin() {

  const [isLoading,setIsLoading]=useState(false);

    const navigate=useNavigate()
    const [state,setState]=useState<signinParams>({
      email:"",
      password:""
    })
    async function handleClick(){
      setIsLoading(true);

      try {
          
          const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`,state)
          console.log(res.data)
          localStorage.setItem("token",res.data.token)
          localStorage.setItem("username",res.data.name)
          navigate("/dashboard")
      } catch (error) {
        alert("Invalid inputs!")
        console.log("Error at signing in using axios")
        
      }
      setIsLoading(false);

    }
  return (
    <div className="flex justify-center h-screen items-center bg-slate-950 w-full text-white">
      <div className="flex flex-col items-center justify-center border border-gray-500 rounded-lg shadow-lg shadow-black bg-slate-900 p-10  w-1/3">
      <div className="text-3xl dark:text-white font-bold pb-4 font-mono">Log in here</div>
      <p>Hey, thanks for bearing with us! We’ve held off on session persistence for now so you can experience our awesome in-house authentication firsthand. 😁
      </p>
     <div className=" py-4 w-full">
     <Lablebox onChange={(e)=>{
        setState({
          ...state,email:e.target.value
        })
      }} name="Email" placeholdertext="niranjan@example.com" />
      <Lablebox onChange={(e)=>{
               setState({ ...state,password:e.target.value})
      }
      } name="Password" placeholdertext="supersecret" type="password" />
     </div>
     <MordernButton onClick={handleClick} isLoading={isLoading} title={"Sign in"}></MordernButton>
     </div> 
     
    </div>
  );
}