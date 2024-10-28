import { ReactNode, useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Link } from "react-router-dom";
type SingleBlog={
    title:string;
    id:number;
    content:string;
    imageLink:string;
    published:boolean;
}
export default function BlogWrapper(){
    const [isLoading,setIsLoading]=useState(true);
    const [blogsData,setBlogData]=useState<SingleBlog[]>([]);

    useEffect(()=>{
        (async ()=>{
            const res=await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`);
            setBlogData(res.data);
            setIsLoading(false);
        })();
    },[])
    return <div className="px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-white py-8">
            <Link to={"/create"}>
            <div className="bg-slate-700  text-white rounded-lg shadow-lg w-full">
            <img className=" object-cover rounded-lg h-50 w-full" src="https://img.freepik.com/free-vector/health-care-plus-symbol-logo-template_474888-3234.jpg?semt=ais_hybrid" alt="Unloaded Image" />

               <h1 className=" py-4 text-2xl text-center font-mono">Add a Blog here.</h1>
            </div>
            </Link>
            {
                isLoading&& <div className="bg-slate-700  text-white rounded-lg shadow-lg w-full">
                <img className=" object-cover rounded-lg h-50 w-full" src="https://media0.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.webp?cid=790b7611cjnvh3t0pl5xpm3nfjal52r05wolrktbxi53ykx2&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="Unloaded Image " />
    
                   <h1 className=" py-4 text-2xl text-center font-mono">Loading...</h1>
                </div>
            }
            {
            blogsData.map(({id,title,imageLink,content}:SingleBlog):ReactNode=>{
                try {
                    let part=content.split(" ").slice(0,15).join(" ") || content;

                    const parser = new DOMParser();
                    const doc=parser.parseFromString(part,"text/html");
                    return <Blog id={`${id}`} title={title} description={doc.body.textContent+" ..."} imageLink={imageLink}>

                </Blog>
                } catch (error) {
                    console.log(error)
                }
                
            })
            }        
    </div>
}