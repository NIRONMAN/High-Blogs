import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function Appbar(){
    return <div className="flex justify-between text-white px-16 ">
        <Link to="/" className="pt-3 ps-1" >
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Rocket color="blue"></Rocket>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    <span className="text-red-500 font-mono">H</span>
    <span className="text-green-500 font-sans">i</span>
    <span className="text-blue-500 font-serif">g</span>
    <span className="text-pink-500 font-bold">h</span>
    <span className="text-yellow-500"> </span>
    <span className="text-orange-500 font-sans">B</span>
    <span className="text-green-400 font-mono">l</span>
    <span className="text-blue-400 font-serif">o</span>
    <span className="text-purple-500 font-bold">g</span>
    <span className="text-yellow-400 font-sans">s</span>
</span>
    </a>
    </Link>
        <div className="flex py-4 gap-6 mr-10 font-medium text-lg">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
        
    </div>
}