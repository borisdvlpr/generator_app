import { connect, model, Schema } from "mongoose";
import paymentSchema from "../models/payment";

const uri: string = "mongodb://127.0.0.1:27017/payments";

connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);

  } else {
    console.log("Connected to MongoDB");
  }
});

const Payment = model("Payment", paymentSchema);
export default Payment;