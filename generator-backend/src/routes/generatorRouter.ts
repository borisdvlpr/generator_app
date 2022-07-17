import express, { Router } from 'express';
import * as generatorController from '../controllers/generatorController';

const router: Router = express.Router();

router.get('/generator', generatorController.generateCode);

export default router;
