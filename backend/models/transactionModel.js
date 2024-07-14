import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  book: {
    type: mongoose.ObjectId,
    ref: 'books',
    required: true,
  },
  user: {
    type: mongoose.ObjectId,
    ref: 'users',
    required: true,
  },
  deadlineDate: {
    type: Date,
    required: true,
  },
  payment: {
    type: Number,
    default: 0,
    required: true,
  },
  checkoutDate: {
    type: Date,
    required: true,
  },
  extraCharge: {
    type: Number,
    default: 0,
    required: true,
  },
  status: {
    type: String,
    default: "Ordered",
    enum: ["Ordered", "Checkout", "Returned", "Canceled"],
},
});

export default mongoose.model('transactions', transactionSchema);
