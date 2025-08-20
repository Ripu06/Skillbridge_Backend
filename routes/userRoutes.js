import express from 'express';
import { getAllUsers, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all users (for skill listing)
router.get('/', protect, getAllUsers);

// Get own profile
router.get('/me', protect, getUserProfile);

// Update profile
router.put('/me', protect, updateUserProfile);

export default router;
