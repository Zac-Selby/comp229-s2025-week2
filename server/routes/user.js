import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserByID, updateUser, deleteAllUsers } from '../controllers/user.js';

const router = express.Router();

// HTTP Verbs for RESTful API GET, POST, PUT, DELETE
// GET /api/users
router.get('/', getAllUsers); // Get all users

// GET /api/users/:id
router.get('/:id', getUserByID); // Get user by ID

// POST /api/users
router.post('/', createUser); // Create a new user

// PUT /api/users/:id
router.put('/:id', updateUser); // Update a user by ID

// DELETE /api/users/:id
router.delete('/:id', deleteUser); // Delete a user by ID

// DELETE /api/users
router.delete('/', deleteAllUsers); // Delete all users

export default router;