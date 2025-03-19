// AuthContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Login function
    const login = async (userData) => {
        try {
            const response = await axios.post('http://localhost:8000/login', userData);
            setUser(response.data.user);
            alert('Logged in successfully');
        } catch (error) {
            console.error('Login failed:', error);
            alert(error.response?.data?.message || 'Login failed');
        }
    };

    // Register function
    const register = async (userData) => {
        try {
            const response = await axios.post('http://localhost:8000/register', userData);
            setUser(response.data.user);
            alert('Registration successful');
        } catch (error) {
            console.error('Registration failed:', error);
            alert(error.response?.data?.message || 'Registration failed');
        }
    };

    // Logout function
    const logout = () => {
        setUser(null);
        alert('Logged out successfully');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
