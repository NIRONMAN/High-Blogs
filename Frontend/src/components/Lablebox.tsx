import { ChangeEvent } from "react";

 interface labledetails{
  name:string,
  placeholdertext:string,
  onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
  type?:string
 }
 
 const Lablebox =({name,placeholdertext,onChange,type}:labledetails)=>{ 
    return (
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">{name}</label>
            <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder={placeholdertext} required />
          
        </div>

     
    );
  }

  export default Lablebox;