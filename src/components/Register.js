// Register.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';

const Register = () => {
    const { register } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const userData = { username, password,role };
        register(userData);
    };
    const goToLogin = () => {
        navigate('/');
    };

    return (
        
        <div class="form-container">

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
<div className="button-container">
                    <button onClick={() => setRole('user')}>User Register</button>
                <button onClick={() => setRole('admin')}>Admin Register</button>
            </div>                
            <button type="button" onClick={goToLogin}>Go To Login</button>

                
            </form>
        </div>
    );
};

export default Register;
