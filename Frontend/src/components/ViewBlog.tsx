import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from '../../config';
import axios from 'axios';

interface blogContents{
    id?: string,
    title: string,
    content: string,
    published?: boolean,
    authorId?: string,
    imageLink: string
}
export default function ViewBlog(): ReactNode {

  let { blogId } = useParams<{ blogId: string }>();
  const [idVar,setidVar]=useState<blogContents>({
    title:"",
    content:"",
    imageLink:""
  });
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/${blogId}`)
     .then((res) => {
       setidVar(res.data)
      })
     .catch((error) => {
        console.error("Failed to fetch blog:", error);
        return null; 
      });
  }, [blogId]);

    return <div className=" text-white">
        <h1 className=' font-bold'>{idVar.title}</h1>
            <p>{idVar.content}</p>
    </div>
  

}
