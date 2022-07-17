import express, { Router } from 'express';
import * as paymentController from '../controllers/paymentController';

const router: Router = express.Router();

router.get('/payments', paymentController.allPayments);
router.post('/payment', paymentController.addPayment);

export default router;
