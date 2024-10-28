import { Link } from "react-router-dom";

export default function Landing() {

    return (
        <div className="bg-slate-950 flex flex-col items-center justify-center h-[calc(100vh-60px)]">

            <div className="w-full flex justify-center items-center text-[#fcfcfc]">
                <div className="w-1/2 flex flex-col items-center justify-center p-8 bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-lg shadow-lg h-full">
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mb-4">Welcome to High Blogs</h1>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-6 text-center">
                        Where Every Blog Takes You to New Heights of Insight and Inspiration 🚀
                    </p>
                    <p className="text-lg font-light text-gray-600 dark:text-gray-300 mb-4 text-center">
                        Dive into a seamless blogging experience with our minimal, distraction-free editor,
                        and get inspired with our AI-powered idea generator!
                    </p>
                    <ul className="text-gray-700 dark:text-gray-300 text-start list-inside space-y-2 mb-6">
                        <li>💻 Scalable serverless Backend with Cloudflare Workers and Frontend with CloudFlare Pages.</li>
                        <li>🔐 In house Authentication built with JWT</li>
                        <li>✍️ Powerful yet minimalistic editor for focused writing</li>
                        <li>💡 AI-driven idea suggestions to ignite creativity</li>
                        <li>🗂️ Easy-to-use category and tag system</li>
                    </ul>
                    <Link to="/signup">
                        <button type="button" className="text-lg text-white bg-gray-950 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-6 py-3 mb-4 transition duration-300 ease-in-out dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Sign Up!
                        </button>
                    </Link>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                        Already have an account? <Link className="text-blue-500 hover:underline" to="/signin">Log in</Link> here.
                    </p>
                </div>


                <div className=" w-1/2 h-[calc(100vh-60px)] ">
                    <img className="object-cover h-[calc(100vh-60px)] w-full" src="https://images.unsplash.com/photo-1495602787267-96ab76127c2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlnaHxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
            </div>
        </div>
    );
}
