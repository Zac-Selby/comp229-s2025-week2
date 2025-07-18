import express from 'express';
import { createEducation, getAllEducation, getEducationById, updateEducation, deleteEducation } from '../controllers/education.js';
import { verifyToken, requireRole } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllEducation);
router.get('/:id', getEducationById);
router.post('/', verifyToken, requireRole('admin'), createEducation);
router.put('/:id', verifyToken, requireRole('admin'), updateEducation);
router.delete('/:id', verifyToken, requireRole('admin'), deleteEducation);

export default router;