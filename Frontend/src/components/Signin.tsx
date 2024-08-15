import { useState } from "react";
import Lablebox from "./Lablebox";
import {signinParams} from "@niranjan1309/common";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";
export default function Signin() {
    const navigate=useNavigate()
    const [state,setState]=useState<signinParams>({
      email:"",
      password:""
    })
    async function handleClick(){
      try {
          const res=await axios.post(`${BACKEND_URL}/api/v1/user/signin`,state)
          console.log("REsposne"+res.data.token)
          localStorage.setItem("token",res.data.token)
          navigate("/dashboard")
      } catch (error) {
        alert("Invalid inputs!")
        console.log("Error at signing in using axios")
        
      }
    }
  return (
    <div className="flex justify-center h-screen items-center bg-slate-800 ">
      <div className="flex flex-col items-center justify-center border border-gray-500 rounded-lg p-4 shadow-lg shadow-black">
      <div className="text-xl dark:text-white font-bold p-3">Log in here</div>
      <Lablebox onChange={(e)=>{
        setState({
          ...state,email:e.target.value
        })
      }} name="Email" placeholdertext="niranjan@example.com" />
      <Lablebox onChange={(e)=>{
               setState({ ...state,password:e.target.value})
      }
      } name="Password" placeholdertext="supersecret" type="password" />
      <button onClick={handleClick} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit!</button>
      </div> 
     
    </div>
  );
}