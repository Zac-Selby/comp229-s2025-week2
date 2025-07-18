import Education from '../models/education.js';

export const createEducation = async (req, res) => {
    try {
        const education = new Education(req.body);
        await education.save();
        res.status(201).json(education);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getAllEducation = async (req, res) => {
    try {
        const data = await Education.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getEducationById = async (req, res) => {
    try {
        const data = await Education.findById(req.params.id);
        if (!data) return res.status(404).json({ message: "Not found" });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateEducation = async (req, res) => {
    try {
        const data = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteEducation = async (req, res) => {
    try {
        await Education.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
