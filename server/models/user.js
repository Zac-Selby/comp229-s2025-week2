import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

// 🔐 Password hashing middleware
userSchema.pre('save', async function (next) {
  // Only hash if password was changed or is new
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

export default mongoose.model('user', userSchema);