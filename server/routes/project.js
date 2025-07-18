import express from 'express';
import { createProject, getAllProjects, getProjectById, updateProject, deleteProject } from '../controllers/project.js';
import { verifyToken, requireRole } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', verifyToken, requireRole('admin'), createProject);
router.put('/:id', verifyToken, requireRole('admin'), updateProject);
router.delete('/:id', verifyToken, requireRole('admin'), deleteProject);

export default router;