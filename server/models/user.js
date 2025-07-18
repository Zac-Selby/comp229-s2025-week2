import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/, // Basic email validation
    },
    password: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        required: true
    },
    updated: {
        type: Date,
        required: true
    },
    role: {
        type: String, enum: ['user', 'admin'], default: 'user' 
    }
});

export default mongoose.model('user', userSchema);