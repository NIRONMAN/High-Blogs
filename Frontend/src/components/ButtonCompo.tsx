export default function ButtonCompo({content,onClick}:{content:string,onClick:React.MouseEventHandler<HTMLElement>}){
    return  <button onClick={onClick} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 my-2 ms-2">{content}</button>

}