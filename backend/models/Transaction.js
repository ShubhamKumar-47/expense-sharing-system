const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: String,
  paidBy: String,
  amount: Number,
  description: String
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);
