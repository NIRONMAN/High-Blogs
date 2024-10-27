import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from '../../config';
import axios from 'axios';
import DOMPurify from 'dompurify';

interface blogContents {
  id?: string,
  title: string,
  content: string,
  published?: boolean,
  authorId?: string,
  imageLink: string
}
export default function ViewBlog(): ReactNode {
  const [isLoading, setIsLoading] = useState(true);
  let { blogId } = useParams<{ blogId: string }>();
  const [idVar, setidVar] = useState<blogContents | null>(null);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${blogId}`);
      const clean = await DOMPurify.sanitize(res.data.content);

      setidVar({ ...res.data, content: clean });
      setIsLoading(false);


    })()
  }, [blogId]);
  console.log(idVar)
  return <div className=" text-white  flex flex-col items-center h-full bg-slate-950 p-10">
    {
      isLoading ? <h1>Loading...</h1> : <div className=' bg-slate-800 rounded-lg h-full p-5 flex flex-col items-center'>
        <div className=' flex flex-row py-4 w-full h-[50%]'>
          <img src={idVar?.imageLink} className=' object-cover w-1/2 rounded-xl'></img>
          <div className=' p-4 w-1/2'>
          <h1 className=' font-bold text-3xl py-4'>{idVar!.title}</h1>
            <h2 className=' text-lg'>Author Name: {localStorage.getItem("username")}</h2>
            <h2 className=' text-lg'>Published : {idVar!.published!.toString()}</h2>
          </div>
        </div>
        <div className=' text-lg w-2/3 py-4' dangerouslySetInnerHTML={{ __html: idVar!.content }}></div>
      </div>
    }
  </div>


}
