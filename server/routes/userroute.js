import express from 'express';
import { createData } from '../controller/usercontroller.js';
const router = express.Router();


router.post('/', createData);

export default router;