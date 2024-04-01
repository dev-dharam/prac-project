import express from 'express';
import { Login, Register } from '../controller/usercontroller.js';

const router = express.Router();

// Register Router
router.post("/register", Register);

router.post("/login", Login);


export default router;
