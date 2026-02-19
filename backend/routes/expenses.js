const express = require("express");
const Expense = require("../models/Expense");
const Transaction = require("../models/Transaction");
const Member = require("../models/Member");

const router = express.Router();

router.post("/", async (req, res) => {
  const { paidBy, amount, description } = req.body;

  if (!paidBy || !amount || !description) {
    return res.status(400).json({ message: "All fields required" });
  }

  const members = await Member.find();
  const names = members.map(m => m.name);

  if (!names.includes(paidBy)) {
    return res.status(400).json({ message: "Invalid member" });
  }

  const expense = new Expense({ paidBy, amount, description });
  await expense.save();

  const transaction = new Transaction({
    type: "EXPENSE_ADDED",
    paidBy,
    amount,
    description
  });

  await transaction.save();

  res.status(201).json(expense);
});

router.get("/", async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

router.get("/transactions", async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

module.exports = router;
