import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {

    const MONGO_URI = process.env.MONGODB_URL;
    try {
        await mongoose.connect("mongodb+srv://ritiksanghvi29:ritiksanghvi29@cluster0.jilp4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;
