import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import ContactRouter from './routes/contact.js';
import UserRouter from './routes/user.js';
import authRoutes from './routes/auth.js';
import educationRouter from './routes/education.js';
import projectRouter from './routes/project.js';

dotenv.config();

//MongoDB connection
mongoose.connect('mongodb+srv://zselby:0od5gOCWshpvbc6Q@cluster0.ion1bq0.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster0')
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, `MongoDB connection error:`));
connection.once('open', () => {
    console.log('Connected to MongoDB');
});

const app = express();
const PORT = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

//Routes

app.use('/health', (req, res) => res.status(200).json({ message: 'Server is running' }));
app.use('/api/contact', ContactRouter);
app.use('/api/user', UserRouter);
app.use('/api/auth', authRoutes);
app.use('/api/education', educationRouter);
app.use('/api/projects', projectRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});