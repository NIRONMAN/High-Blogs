import { ReactNode, useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export default function BlogWrapper(){
    const [blogsData,setBlogData]=useState([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`)
        .then((res)=>{
            setBlogData(res.data);
        })
    },[])
    return <div className="px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
            blogsData.map((element:any):ReactNode=>{
                let part=element.content.split(" ").slice(0,15).join(" ");
                return <Blog id={`${element.id}`} title={element.title} description={part+" ..."} imageLink={element.imageLink}>

                </Blog>
            })
            }        
    </div>
}