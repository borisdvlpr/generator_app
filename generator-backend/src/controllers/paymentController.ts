import { Request, Response } from "express";
import Payment from "../db/payments";

let allPayments = (req: Request, res: Response) => {
  	let payments = Payment.find((err: any, payments: any) => {
		if (err) {
			res.send(err);

		} else {
			res.send(payments);
		}
	});
};

let addPayment = (req: Request, res: Response) => {
	let payment = new Payment({
		name: req.body.name,
		amount: req.body.amount,
		code: req.body.code,
		grid: req.body.grid,
	});

    payment.save((err: any) => {
        if (err) {
            res.send(err);

        } else {
            res.send(payment);
        }
    });
};

export { allPayments, addPayment };