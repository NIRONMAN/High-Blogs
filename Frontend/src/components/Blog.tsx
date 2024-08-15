import { useNavigate } from "react-router-dom";

interface blogtypes{
    title:String,
    description:string,
    imageLink?:string,
    id:string
}
export default function Blog({title,description,imageLink,id}:blogtypes){
    const navigate=useNavigate();
    function handleButton(e:React.MouseEvent<HTMLButtonElement>){
        const blogId=e.currentTarget.id;
        navigate(`/view/${blogId}`)
    }
    return <div className="bg-slate-700 w-64 text-white rounded-lg shadow-lg">
        <img className=" object-cover rounded-lg h-40 w-full" src={`${imageLink}`} alt="Unloaded Image " />
        <div className="p-2">
        <h5 className="p-2">{title}</h5>
        <p className="px-2 ">{description}</p>

        <button onClick={handleButton} id={id} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 mt-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Read More
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>        </div>
        
    </div>
}