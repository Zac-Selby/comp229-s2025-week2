import express from 'express';
import { createContact, deleteContact, getAllContacts, getContactByID, updateContact, deleteAllContacts } from '../controllers/contact.js';

const router = express.Router();

// HTTP Verbs for RESTful API GET, POST, PUT, DELETE
// GET /api/contact
router.get('/', getAllContacts); // Get all contacts

// GET /api/contact/:id
router.get('/:id', getContactByID); // Get contact by ID

// POST /api/contact
router.post('/', createContact); // Create a new contact

// PUT /api/contact/:id
router.put('/:id', updateContact); // Update a contact by ID

// DELETE /api/contact/:id
router.delete('/:id', deleteContact); // Delete a contact by ID

// DELETE /api/contact
router.delete('/', deleteAllContacts); // Delete all contacts

export default router;