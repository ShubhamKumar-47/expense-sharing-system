const express = require("express");
const Member = require("../models/Member");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name required" });
    }

    const member = new Member({ name });
    await member.save();

    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ message: "Member already exists" });
  }
});

router.get("/", async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

module.exports = router;
