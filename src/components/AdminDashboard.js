import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

export const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleAddProblem = () => {
        navigate('/addproblems');
    };

    const handleViewProblems = () => {
        navigate('/problems');
    };

   

    return (
        <div>
            <Header />
            <h2>Admin Dashboard</h2>
            <div class="form-container">
            
            <button onClick={handleAddProblem}>Add Problem</button>
            <button onClick={handleViewProblems}>View Problems</button>
            </div>
        </div>
    );
};

export default AdminDashboard;
