import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import {ProblemsList} from './components/ProblemsList';
import {AddProblem} from './components/AddProblem';
import {AdminDashboard} from './components/AdminDashboard';
import isAuthenticated from './AuthContext';



function App() {

    return (
        <Router>
            <div>
                
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route 
                    path="/problems" 
                    element={isAuthenticated ? <ProblemsList /> : <Navigate to="/login" />}
                />
                <Route path="*" element={<Navigate to="/login" />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />

                    <Route path="/addProblems" element={<AddProblem />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
