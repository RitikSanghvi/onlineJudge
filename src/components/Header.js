import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
    return (
        <div className="header">
            <button onClick={handleLogout} className="logout-btn">Logout</button>

        </div>
    );
};

export default Header;
