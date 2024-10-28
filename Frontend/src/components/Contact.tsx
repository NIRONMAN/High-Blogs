import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] bg-slate-950 p-4">
            <h2 className="text-3xl font-semibold text-white mb-4">Contact Me</h2>
            <p className="text-lg text-gray-400 mb-4 text-center">
                Feel free to reach out if you'd like to connect or have any inquiries!
            </p>
            <div className="bg-slate-800 shadow-md rounded-lg p-6 w-full max-w-md">
                <h3 className="text-2xl font-bold text-white mb-2">Niranjan Dabhade</h3>
                <ul className="text-gray-300">
                    <li className="mb-2">
                        <strong>Email:</strong> <a href="mailto:niranjan.dabhade7@gmail.com" className="text-blue-400 hover:underline">niranjan.dabhade7@gmail.com</a>
                    </li>
                    <li className="mb-2">
                        <strong>Portfolio:</strong> <a href="http://nironman.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">nironman.vercel.app</a>
                    </li>
                    <li className="mb-2">
                        <strong>LinkedIn:</strong> <a href="http://linkedin.com/in/niranjan-dabhade-b5b7a8215" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn Profile</a>
                    </li>
                    <li>
                        <strong>GitHub:</strong> <a href="https://github.com/NIRONMAN" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NIRONMAN</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
