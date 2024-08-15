import { useState } from "react";
import ButtonCompo from "./ButtonCompo";
import Lablebox from "./Lablebox";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

interface blogCreationType{
    title:string,
    content:string,
    imageLink:string,
    published?:boolean
}

export default function CreateBlog(){
    const navigate=useNavigate();
    const [state,setState]=useState<blogCreationType>({
        title:"",
        content:"",
        imageLink:"",
        published:false
    })
    
    async function handleButton(){
        const res=await axios.post(`${BACKEND_URL}/api/v1/blog`,{state},{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        });
        const blogId=res.data.id;
        navigate(`/view/${blogId}`)
        

    }
    return <div className="p-4 flex justify-center items-center bg-slate-900">
        <div className="w-1/2 ">

<label className="flex justify-center text-5xl font-bold block mb-2 text-sm font-medium text-gray-900 dark:text-white p-3">Create a Blog</label>

<Lablebox name={"Enter the Title"} placeholdertext="A new Beggining..." onChange={(e)=>{
    setState({
        ...state,
        title:e.target.value
    });
}} >
</Lablebox>

<textarea  rows={10} className="p-2 mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." onChange={(e)=>{
    setState({
        ...state,
        content:e.target.value
    })
}}></textarea>

<Lablebox name={"Place your thumbnail Link"} placeholdertext="example.com"onChange={(e)=>{
    setState({
        ...state,
        imageLink:e.target.value
    })
}} ></Lablebox>

<div className="flex justify-end">

<ButtonCompo onClick={handleButton} content="Publish!"></ButtonCompo>

</div>
        </div>

    </div>
}