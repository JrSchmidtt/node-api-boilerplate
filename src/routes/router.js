import express from 'express';
import PingController from '../controllers/PingController';

const router = express.Router();

router.get('/ping', PingController.index);

export default router;