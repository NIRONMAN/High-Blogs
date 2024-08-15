import { Link } from "react-router-dom";

export default function Landing() {
    
    return (
        <div className="bg-[#2e4d69] flex flex-col items-center justify-center min-h-screen">
            
            <div className="w-full flex justify-center items-center text-[#fcfcfc]">
                <div className="w-1/2 flex flex-col items-center justify-center p-8">
                    <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mb-4">Welcome to High</h1>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-6 text-center">Where Every Blog Takes You to New Heights of Insight and Inspiration!</p>
                    <Link to="/dashboard">
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Started!</button>
                    </Link>
                </div>

                <div className="h-screen w-1/2">
                    <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1495602787267-96ab76127c2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlnaHxlbnwwfHwwfHx8MA%3D%3D"/>
                </div>
            </div>
        </div>
    );
}
