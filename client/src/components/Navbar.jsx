import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, confirmLogout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="glass sticky top-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    AuthMaster
                </Link>

                <div className="flex items-center gap-6">
                    <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Home</Link>
                    
                    {user ? (
                        <div className="relative">
                            <button 
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center gap-2 focus:outline-none"
                            >
                                <img src={user.picture} alt={user.name} className="h-10 w-10 rounded-full border-2 border-indigo-100 shadow-sm" />
                                <span className="hidden md:block font-medium text-gray-700">{user.name}</span>
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
        </nav>
    );
};

export default Navbar;
