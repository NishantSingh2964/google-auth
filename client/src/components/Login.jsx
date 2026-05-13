import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const { login, user } = useAuth();

    // If already logged in, redirect to dashboard
    if (user) {
        return <Navigate to="/success-login" replace />;
    }

    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6 bg-transparent">
            <div className="w-full max-w-md animate-fade-in">
                <div className="glass rounded-3xl overflow-hidden shadow-2xl">
                    <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 p-10 text-center relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>
                        
                        <h1 className="text-4xl font-bold text-white mb-3 relative z-10">Welcome</h1>
                        <p className="text-indigo-100 text-lg relative z-10">Experience secure, seamless authentication</p>
                    </div>

                    <div className="p-10 bg-white/40">
                        <p className="text-gray-500 text-center mb-8 font-medium">Continue with your social account</p>
                        
                        <button 
                            onClick={login}
                            className="w-full flex items-center justify-center gap-4 px-6 py-4 border-2 border-gray-100 rounded-2xl text-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-indigo-200 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24">
                                <path fill="#EA4335" d="M12 5c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.68 14.91 1 12 1 7.48 1 3.69 3.65 2.06 7.5l3.81 2.96C6.76 7.6 9.17 5 12 5z"/>
                                <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.71 2.88c2.16-1.99 3.41-4.91 3.41-8.7z"/>
                                <path fill="#FBBC05" d="M5.87 14.46c-.24-.71-.37-1.47-.37-2.26 0-.79.13-1.55.37-2.26L2.06 7.5C1.1 9.4 0.54 11.64 0.54 14c0 2.36.56 4.6 1.52 6.5l3.81-2.96z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.71-2.88c-1.03.69-2.35 1.1-3.57 1.1-2.83 0-5.24-1.91-6.13-4.46l-3.81 2.96C3.69 20.35 7.48 23 12 23z"/>
                            </svg>
                            Sign in with Google
                        </button>

                        <div className="mt-8 text-center">
                            <p className="text-gray-400 text-sm">
                                By signing in, you agree to our <br/>
                                <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">Terms of Service</span> & <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">Privacy Policy</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
