import Project from '../models/project.js';

export const createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getAllProjects = async (req, res) => {
    try {
        const data = await Project.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getProjectById = async (req, res) => {
    try {
        const data = await Project.findById(req.params.id);
        if (!data) return res.status(404).json({ message: "Not found" });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateProject = async (req, res) => {
    try {
        const data = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};