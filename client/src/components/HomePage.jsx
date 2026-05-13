import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
    const { user } = useAuth();

    return (
        <div className="min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center p-6 text-center">
            <div className="max-w-6xl w-full animate-fade-in">
                <div className="mb-8 inline-block px-4 py-1.5 glass rounded-full text-indigo-600 font-semibold text-sm tracking-wide uppercase">
                    Revolutionizing Auth
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                    Secure Access for the 
                    <span className="block sm:inline bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent sm:ml-3">
                        Modern Web
                    </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium px-4">
                    The ultimate Google Authentication starter kit. Seamless, secure, and stunningly designed for developers who care about user experience.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    {user ? (
                        <Link 
                            to="/success-login" 
                            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-200"
                        >
                            Go to Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link 
                                to="/login" 
                                className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-200"
                            >
                                Get Started Free
                            </Link>
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noreferrer"
                                className="px-8 py-4 glass text-gray-700 rounded-2xl font-bold text-lg hover:bg-white hover:scale-105 active:scale-95 transition-all"
                            >
                                View Documentation
                            </a>
                        </>
                    )}
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Ultra Secure', desc: 'Industry standard JWT & OAuth2 integration' },
                        { title: 'Lightning Fast', desc: 'Built with Vite and React for peak performance' },
                        { title: 'Premium Design', desc: 'Stunning UI with Tailwind and Glassmorphism' }
                    ].map((feature, i) => (
                        <div key={i} className="glass p-8 rounded-3xl text-left hover:border-indigo-200 transition-colors">
                            <h3 className="text-xl font-bold mb-2 text-indigo-900">{feature.title}</h3>
                            <p className="text-gray-500">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
