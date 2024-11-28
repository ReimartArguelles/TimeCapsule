import express from 'express';
import router from './routes/userroute.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

console.log('MONGODB_URI:', process.env.MONGODB_URI); // Verify the environment variable

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('public'));

app.use('/', router);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error:', error.message);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});