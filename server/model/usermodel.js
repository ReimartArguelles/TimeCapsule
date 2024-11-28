import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
    },
    skillsAcquired: {
        type: String,
        required: true,
        trim: true
    }
});

const userModel = mongoose.model('userData', userSchema);

export default userModel;

