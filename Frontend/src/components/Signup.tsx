import { ChangeEvent, useState } from "react";
import Lablebox from "./Lablebox";
import axios from "axios";
import { signupParams } from "@niranjan1309/common";
import {BACKEND_URL} from "../../config.ts"
import { useNavigate } from "react-router-dom";
export default function Signup(){
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
      try {
        const res=await axios.post(`${BACKEND_URL}/api/v1/user/signup`,state);
        localStorage.setItem("token",res.data.token);
        navigate("/dashboard");
      } catch (error) {
        alert("Invalid inputs!")
        console.log("error while axios post request");
      }

    }

  return (
    <div className="flex justify-center h-screen items-center bg-slate-800 ">
      <div className="flex flex-col items-center justify-center border border-gray-500 rounded-lg p-4 shadow-lg shadow-black bg-slate-750">
      <div className="text-xl dark:text-white font-bold p-2">Create Your Account</div>
      <Lablebox onChange={(e:ChangeEvent<HTMLInputElement>):void=>{
        setState({...state,name:e.target.value})
      }} name="Username" placeholdertext="nironman" />
      <Lablebox onChange={(e:ChangeEvent<HTMLInputElement>):void=>{
        setState({...state,email:e.target.value})
      }} name="Email" placeholdertext="niranjan@example.com" />

      <Lablebox onChange={(e:ChangeEvent<HTMLInputElement>):void=>{
        setState({...state,password:e.target.value})
      }} name="Password" placeholdertext="supersecret" type="password"/>

      <button onClick={handleClick} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit!</button>
      </div> 
     
    </div>
  );
}