import {  MouseEventHandler } from "react"

type ButtonTypes={
    onClick:MouseEventHandler<HTMLButtonElement>,
    title:string,
    isLoading:boolean
}
function MordernButton({onClick,title,isLoading}:ButtonTypes) {
  return (
    <div className=" bg-slate-600 w-full flex justify-center rounded-md px-2 py-1 "><button disabled={isLoading} onClick={onClick} className=" w-full text-white font-mono">{isLoading?"Processing...":title}</button></div>
  )
}

export default MordernButton