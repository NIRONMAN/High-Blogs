import { ChangeEvent, useState } from "react";
import Lablebox from "./Lablebox";
import axios from "axios";
import { signupParams } from "@niranjan1309/common";
import {BACKEND_URL} from "../../config.ts"
import { useNavigate } from "react-router-dom";
import MordernButton from "./MordernButton.tsx";
export default function Signup(){
    const [isLoading,setIsLoading]=useState(false);
  const navigate = useNavigate();

    const [state,setState]=useState<signupParams>({
      name:"",
      email:"",
      password:""
    })
    // const [name,setName]=useState("");
    // const [email,setemail]=useState("");
    // const [password,setpassword]=useState("");
    async function handleClick(){
      setIsLoading(true);
      try {
        const res=await axios.post(`${BACKEND_URL}/api/v1/user/signup`,state);
        await localStorage.setItem("token",res.data.token);
        await localStorage.setItem("username",state.name);
        navigate("/dashboard");
      } catch (error) {
        alert("Invalid inputs!")
        console.log("error while axios post request");
      }
      setIsLoading(false)
    }

  return (
    <div className="flex justify-center h-screen items-center bg-slate-950 ">
      <div className="bg-slate-800 flex flex-col items-center justify-center border border-gray-500 rounded-lg shadow-lg shadow-black p-10 w-1/3">
      <div className="text-3xl dark:text-white font-mono pb-2">Create Your Account</div>
      <div className=" py-2 w-full">
      <Lablebox onChange={(e:ChangeEvent<HTMLInputElement>):void=>{
        setState({...state,name:e.target.value})
      }} name="Username" placeholdertext="nironman" />
      <Lablebox onChange={(e:ChangeEvent<HTMLInputElement>):void=>{
        setState({...state,email:e.target.value})
      }} name="Email" placeholdertext="niranjan@example.com" />

      <Lablebox onChange={(e:ChangeEvent<HTMLInputElement>):void=>{
        setState({...state,password:e.target.value})
      }} name="Password" placeholdertext="supersecret" type="password"/>
      </div>

      <MordernButton onClick={handleClick} isLoading={isLoading} title={"Sign up"}></MordernButton>
      </div> 
     
    </div>
  );
}