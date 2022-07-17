import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    name:  { 
        type: String, 
        required: true
    },
    amount: { 
        type: String, 
        required: true 
    },
    code: { 
        type: String, 
        required: true 
    },
    grid: { 
        type: String, 
        required: true 
    }
});

export default paymentSchema;