import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    statement: { type: String, required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    difficulty: { type: String }
});

const Problem = mongoose.model('Problem', problemSchema);

export default Problem;