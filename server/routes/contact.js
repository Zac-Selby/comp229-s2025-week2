import express from 'express';
import { createContact, getAllContacts, getContactByID, updateContact, deleteContact, deleteAllContacts } from '../controllers/contact.js';

import { verifyToken, requireRole } from '../middleware/auth.js';

const router = express.Router();

// HTTP Verbs for RESTful API GET, POST, PUT, DELETE
// GET /api/contact
router.get('/', verifyToken, getAllContacts); // Get all contacts

// GET /api/contact/:id
router.get('/:id', verifyToken, getContactByID); // Get contact by ID

// POST /api/contact
router.post('/', verifyToken, requireRole('admin'), createContact); // Create a new contact

// PUT /api/contact/:id
router.put('/:id', verifyToken, requireRole('admin'), updateContact); // Update a contact by ID

// DELETE /api/contact/:id
router.delete('/:id', verifyToken, requireRole('admin'), deleteContact); // Delete a contact by ID

// DELETE /api/contact
router.delete('/', verifyToken, requireRole('admin'), deleteAllContacts); // Delete all contacts

export default router;