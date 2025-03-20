import Problem from '../models/problems.js';
// Get the list of all problems
export const getProblems = async (req, res) => {
    try {
        const problems = await Problem.find({});
        res.status(200).json(problems);
    } catch (error) {
        console.error("Error fetching problems:", error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const addProblem = async (req,res)=>{
    try {
        const { statement, name, code, difficulty } = req.body;

        // if (!statement || !name || !code) {
        //     return res.status(400).json({ message: 'Statement, name, and code are required.' });
        // }

        const newProblem = new Problem({ statement, name, code, difficulty });
        await newProblem.save();

        res.status(201).json({ message: 'Problem added successfully' });
    }
    catch (error) {
        console.error("Error adding problem:", error);
        res.status(500).json({ message: 'Server Error' });
    }
};