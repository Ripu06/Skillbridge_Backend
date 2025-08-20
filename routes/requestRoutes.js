import express from 'express';
import { sendRequest, getRequestsForUser } from '../controllers/requestController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, sendRequest);
router.get('/', protect, getRequestsForUser);

export default router;
