import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-4">
            <h2 className="text-3xl font-semibold text-white mb-4">About Me</h2>
            <div className="bg-slate-800 shadow-md rounded-lg p-6 w-full max-w-2xl">
                <p className="text-gray-300 mb-4">
                    Hi! I'm Niranjan Dabhade, currently pursuing a B.Tech in Computer Science and Engineering from the Maharashtra Institute of Technology. With a strong foundation in programming and data science, I have worked as a Data Science Intern at Findability Sciences, where I developed high-quality datasets and built accurate forecasting models.
                </p>
                <h3 className="text-2xl font-bold text-white mb-2">Key Projects</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>
                        <strong>Learnability AI 2.0:</strong> An AI-driven educational platform utilizing Next.js, Flask, and RAG, enhancing user engagement with flashcards, mind maps, and revision modes.
                    </li>
                    <li>
                        <strong>Hi-Blogs:</strong> A full-stack blog application with TypeScript and Prisma, featuring a serverless backend using Cloudflare Workers and optimized database performance.
                    </li>
                    <li>
                        <strong>Niropay:</strong> A secure digital wallet application with JWT authentication, built using Express, MongoDB, and Tailwind CSS for a user-friendly interface.
                    </li>
                </ul>
                <h3 className="text-2xl font-bold text-white mt-4 mb-2">Skills & Interests</h3>
                <p className="text-gray-300">
                    I am proficient in languages like C++, JavaScript, TypeScript, and Python, with experience in frameworks and tools like React, Node.js, and Docker. In my free time, I enjoy traveling, engaging with philosophy, and participating in community events.
                </p>
            </div>
        </div>
    );
};

export default About;
