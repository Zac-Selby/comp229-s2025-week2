import express from 'express';
import { signin, signout } from '../controllers/auth.js';

const router = express.Router();

router.post('/signin', signin);
router.get('/signout', signout);

export default router;