import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/payment', (req: Request, res: Response) => {
	res.json(`id = ${1}`);
});

export default router;
