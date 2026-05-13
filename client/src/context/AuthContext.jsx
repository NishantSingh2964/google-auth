import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Backend URL from environment variable or fallback to localhost
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/auth';

    // Fetch user details
    const fetchUser = async () => {
        try {
            const response = await axios.get(`${API_URL}/user`, {
                withCredentials: true
            });
            setUser(response.data.user);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const login = () => {
        window.location.href = `${API_URL}/google`;
    };

    const logout = async () => {
        try {
            await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
            setUser(null);
            window.location.href = '/login';
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    const confirmLogout = () => {
        const toastId = toast((t) => (
            <div className="flex flex-col gap-3 p-1">
                <p className="font-semibold text-gray-800">Are you sure you want to logout?</p>
                <div className="flex gap-2">
                    <button
                        onClick={async () => {
                            toast.dismiss(toastId);
                            await logout();
                            toast.success('Logged out successfully');
                        }}
                        className="bg-red-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-red-600 transition-colors"
                    >
                        Yes, Logout
                    </button>
                    <button
                        onClick={() => toast.dismiss(toastId)}
                        className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ), {
            duration: 5000,
            style: {
                borderRadius: '16px',
                background: '#fff',
                color: '#333',
                padding: '16px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            },
        });
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, confirmLogout, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
};
