import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, confirmLogout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="glass sticky top-0 z-50 w-full px-2 sm:px-4 md:px-10 py-3 sm:py-4">
            <div className="max-w-[1600px] mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent shrink-0">
                    AuthMaster
                </Link>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-gray-600 hover:text-indigo-600 focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Home</Link>
                    
                    {user ? (
                        <div className="relative">
                            <button 
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center gap-2 focus:outline-none"
                            >
                                <img src={user.picture} alt={user.name} className="h-10 w-10 rounded-full border-2 border-indigo-100 shadow-sm" />
                                <span className="font-medium text-gray-700">{user.name}</span>
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 mt-3 w-48 glass rounded-xl shadow-xl py-2 animate-fade-in">
                                    <Link to="/success-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition-colors">Dashboard</Link>
                                    <button 
                                        onClick={confirmLogout}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link 
                            to="/login" 
                            className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
                        >
                            Get Started
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile Sidebar/Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass border-t border-indigo-50 py-4 px-6 animate-fade-in shadow-xl">
                    <div className="flex flex-col gap-4">
                        <Link 
                            to="/" 
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 hover:text-indigo-600 font-medium py-2"
                        >
                            Home
                        </Link>
                        {user ? (
                            <>
                                <div className="flex items-center gap-3 py-2 border-t border-indigo-50 mt-2">
                                    <img src={user.picture} alt={user.name} className="h-10 w-10 rounded-full border-2 border-indigo-100" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-800">{user.name}</span>
                                        <span className="text-xs text-gray-500">{user.email}</span>
                                    </div>
                                </div>
                                <Link 
                                    to="/success-login" 
                                    onClick={() => setIsOpen(false)}
                                    className="text-indigo-600 font-medium py-2"
                                >
                                    Dashboard
                                </Link>
                                <button 
                                    onClick={() => {
                                        setIsOpen(false);
                                        confirmLogout();
                                    }}
                                    className="text-left text-red-600 font-medium py-2"
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <Link 
                                to="/login" 
                                onClick={() => setIsOpen(false)}
                                className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-center mt-2 shadow-lg shadow-indigo-100"
                            >
                                Get Started
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
