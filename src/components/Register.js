// Register.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';

const Register = () => {
    const { register } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const userData = { username, password };
        register(userData);
    };
    const goToLogin = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input 
                    type="text" 
                    required
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="password" 
                    required
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Register</button>
                <button type="button" onClick={goToLogin} style={{ marginLeft: '10px' }}>Login</button>

                
            </form>
        </div>
    );
};

export default Register;
