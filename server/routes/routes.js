import express from 'express';
import { registerUser, loginUser } from '../controller/controller.js';
import {getProblems,addProblem} from '../controller/problemController.js';

const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/problems', getProblems);
router.post('/addProblems',addProblem)

export default router;