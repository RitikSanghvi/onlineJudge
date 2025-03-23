import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

export const AddProblem = ({ onProblemAdded }) => {
    const [statement, setStatement] = useState('');
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const navigate = useNavigate();

    const handleAddProblem = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/addProblems', {
                statement,
                name,
                code,
                difficulty,
            });
            alert('Problem added successfully');
            setStatement('');
            setName('');
            setCode('');
            setDifficulty('');
        } catch (error) {
            console.error('Error adding problem:', error);
            alert('Failed to add problem');
        }
    };

    const goToDashboard = () => {
        navigate('/admin-dashboard');
    };

    return (
        <>
        <Header />
        <div className="form-addProblem">
            <h3>Add New Problem</h3>
            <form onSubmit={handleAddProblem}>
                <div className="form-row">
                    <label>Statement:</label>
                    <textarea value={statement} onChange={(e) => setStatement(e.target.value)} required />
                </div>
                <div className="form-row">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-row">
                    <label>Code:</label>
                    <textarea value={code} onChange={(e) => setCode(e.target.value)} required />
                </div>
                <div className="form-row">
                    <label>Difficulty:</label>
                    <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
                </div>
                <div className="button-row">
                    <button type="submit" className="add-problem-btn">Add Problem</button>
                    <button type="button" className="dashboard-btn" onClick={goToDashboard}>Go to Dashboard</button>
                </div>
            </form>
        </div>
        </>
    );
};

export default AddProblem;
