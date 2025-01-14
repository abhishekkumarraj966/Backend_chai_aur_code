import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/User.controller.js';

const router = Router();

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);




router.get('/af', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Users API' });
});

export default router;