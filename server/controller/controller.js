import bcrypt from 'bcrypt';
import User from '../models/file.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const registerUser = async (req, res) => {
    const { username, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user' });
  }
}
export const loginUser = async (req, res) => {
    const { username, password } = req.body;

      try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });
    
        const token = jwt.sign({ id: user._id, role: user.role }, 'secretkey', { expiresIn: '1h' });
        res.status(200).json({ token , role:user.role});
      } catch (err) {
        res.status(500).json({ message: 'Login failed' });
      }
}


