import React from 'react';
import { useAuth } from '../context/AuthContext';

const SuccessLogin = () => {
    const { user, confirmLogout } = useAuth();

    if (!user) return null;

    return (
        <div className="min-h-[calc(100vh-80px)] p-4 sm:p-6 md:p-12 animate-fade-in">
            <div className="max-w-5xl mx-auto">
                <header className="mb-8 md:mb-10 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">User Dashboard</h1>
                    <p className="text-gray-500 mt-2 text-sm md:text-base">Welcome back, {user.name.split(' ')[0]}! Here is your profile overview.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="glass rounded-3xl p-8 shadow-xl text-center">
                            <div className="relative inline-block mb-6">
                                <img 
                                    src={user.picture} 
                                    alt={user.name} 
                                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto object-cover"
                                />
                                <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                            <p className="text-indigo-600 font-medium mb-6">{user.email}</p>
                            
                            <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
                                <button className="w-full py-3 px-4 bg-indigo-50 text-indigo-700 rounded-xl font-semibold hover:bg-indigo-100 transition-colors">
                                    Edit Profile
                                </button>
                                <button 
                                    onClick={confirmLogout}
                                    className="w-full py-3 px-4 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-colors"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats/Details Card */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="glass rounded-3xl p-8 shadow-xl">
                            <h3 className="text-xl font-bold mb-6 text-gray-800">Account Security</h3>
                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white/50 rounded-2xl border border-gray-100 gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 text-xl font-bold shrink-0">
                                            G
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800">Google Authentication</p>
                                            <p className="text-sm text-gray-500 break-all">Linked to {user.email}</p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider self-start sm:self-center">Active</span>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white/50 rounded-2xl border border-gray-100 gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                            🔑
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800">JWT Session</p>
                                            <p className="text-sm text-gray-500">Secure HTTP-Only Cookie</p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider self-start sm:self-center">Encrypted</span>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-3xl p-8 shadow-xl">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Raw User Data</h3>
                            <div className="bg-gray-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-indigo-400 text-sm font-mono leading-relaxed">
                                    {JSON.stringify(user, null, 2)}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessLogin;
