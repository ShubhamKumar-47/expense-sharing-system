// Load environment variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

/* ==============================
   CORS CONFIGURATION (IMPORTANT)
   ============================== */
app.use(cors({
  origin: "*", // allow all (safe for APIs)
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

/* ==============================
   MONGODB CONNECTION
   ============================== */
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing in environment variables");
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => {
    console.error("MongoDB Connection Failed ❌");
    console.error(err.message);
    process.exit(1);
  });

/* ==============================
   ROUTES
   ============================== */
app.get("/", (req, res) => {
  res.send("MongoDB Expense API Running 🚀");
});

app.use("/members", require("./routes/members"));
app.use("/expenses", require("./routes/expenses"));
app.use("/debts", require("./routes/debts"));

/* ==============================
   START SERVER
   ============================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
