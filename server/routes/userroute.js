import express from 'express';
import { createData, getData } from '../controller/usercontroller.js';
const router = express.Router();

router.post('/user', createData);
router.get('/', getData);

export default router;