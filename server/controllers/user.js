import UserModel from "../models/user.js";

//Read all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Read user by ID
export const getUserByID = async (req, res) => {
    try {
        const users = await UserModel.findById(req.params.id);
        if (!users) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Create a new user
export const createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        const savedUser= await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Update a user by ID
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params.id)
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Delete all users
export const deleteAllUsers = async (req, res) => {
    try {
        await UserModel.deleteMany();
        res.status(200).json({ message: "All users deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}