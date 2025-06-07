import ContactModel from "../models/contact.js";

//Read all contacts
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactModel.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Read contact by ID
export const getContactByID = async (req, res) => {
    try {
        const contact = await ContactModel.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Create a new contact
export const createContact = async (req, res) => {
    try {
        const newContact = new ContactModel(req.body);
        const savedContact= await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Update a contact by ID
export const updateContact = async (req, res) => {
    try {
        const updatedContact = await ContactModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Delete a contact by ID
export const deleteContact = async (req, res) => {
    try {
        const deletedContact = await ContactModel.findByIdAndDelete(req.params.id)
        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Delete all contacts
export const deleteAllContacts = async (req, res) => {
    try {
        await ContactModel.deleteMany();
        res.status(200).json({ message: "All contacts deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}