import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    school: {
        type: String, required: true
    },
    degree: {
        type: String, required: true
    },
    startYear: { 
        type: Number, required: true
    },
    endYear: {
        type: Number
    },
    description: {
        type: String
    }
}, { timestamps: true });

export default mongoose.model('Education', educationSchema);
