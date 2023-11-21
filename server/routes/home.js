import express from 'express';
import dotenv from 'dotenv';
import createUser from '../controllers/userController.js';
dotenv.config();
const router = express.Router();

router.get('/', createUser);

export default router;