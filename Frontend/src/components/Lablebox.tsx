import { ChangeEvent } from "react";

 interface labledetails{
  name:string,
  placeholdertext:string,
  onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
  type?:string
 }
 
 const Lablebox =({name,placeholdertext,onChange,type}:labledetails)=>{ 
    return (
      <div className=" w-full">
        <label className="block mb-2 text-lg font-medium text-white">{name}</label>
            <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 px-2 py-1.5" placeholder={placeholdertext} required />
          
        </div>

     
    );
  }

  export default Lablebox;