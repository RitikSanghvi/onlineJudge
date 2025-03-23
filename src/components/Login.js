// Login.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';


const Login = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = { username, password };
        login(userData,navigate);
        //navigate('/problems');
        
    };

    const goToRegister = () => {
        navigate('/register');
    };

    return (
         
        <div class="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                required
                    type="text" 
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
                <div>
                <button onClick={handleLogin}>Login</button>

            </div>
            <button type="button" onClick={goToRegister}>New User Sign Up</button>

            </form>
        </div>
    );
};

export default Login;
