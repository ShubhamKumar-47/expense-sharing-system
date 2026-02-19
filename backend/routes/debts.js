const express = require("express");
const Member = require("../models/Member");
const Expense = require("../models/Expense");
const calculateDebts = require("../utils/calculateDebts");

const router = express.Router();

router.get("/", async (req, res) => {
  const members = await Member.find();
  const expenses = await Expense.find();

  const debts = calculateDebts(members, expenses);

  res.json(debts);
});

module.exports = router;
