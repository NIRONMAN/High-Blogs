import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function Appbar(){
    return <div className="flex justify-between text-white px-16 py-2">
        <Link to="/" className="pt-3 ps-1" >
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Rocket></Rocket>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">High Blogs</span>
    </a>
    </Link>
        <div className="flex py-4 gap-6 mr-10 font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
        
    </div>
}