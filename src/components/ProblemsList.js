import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

export const ProblemsList = () => {
    const [problems, setProblems] = useState([]);

    const fetchProblems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/problems');
            setProblems(response.data);
        } catch (error) {
            console.error('Error fetching problems:', error);
        }
    };

    useEffect(() => {
        fetchProblems();
    }, []);

    return (
        <>
            <Header />
        <div className="problems-container">
            
            <h2>Problem List</h2>
            <table className="problems-table">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Title</th>
                        <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map((problem) => (
                        <tr key={problem.code} className="problem-row">
                            <td className="status">{problem.status || 'Not Attempted'}</td>
                            <td className="title">
                                <a href={`/problem/${problem.code}`} className="problem-link">
                                    {problem.name}
                                </a>
                            </td>
                            <td className={`difficulty ${problem.difficulty?.toLowerCase()}`}>
                                {problem.difficulty || 'N/A'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default ProblemsList;
