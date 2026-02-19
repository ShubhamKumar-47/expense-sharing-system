# 💰 Full Stack Expense Sharing System

A Full Stack Expense Sharing Web Application built using **React, Node.js, Express, and JSON file storage (fs module)**.

This system allows a group of people to track shared expenses and automatically calculate **who owes whom** using a pair-wise net settlement model.

---

## 🚀 Live Demo

Frontend: (Add your Vercel link here)  
Backend: (Add your Render link here)

---

## 📌 Project Objective

Build a full-stack application that:

- Tracks shared expenses
- Splits expenses equally among members
- Automatically calculates debts
- Cancels internal mutual debts
- Displays clean pair-wise settlements

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- React Router
- CSS (Custom UI)

### Backend
- Node.js
- Express.js
- fs (File System module for JSON persistence)

### Storage
- JSON files (No database)
- Single group system
- No authentication

---

## 📂 Project Structure

expense-sharing-system/
│
├── backend/
│   ├── data/
│   │   ├── members.json
│   │   ├── expenses.json
│   │   └── transactions.json
│   ├── utils/
│   │   └── calculateDebts.js
│   ├── routes/
│   │   ├── members.js
│   │   ├── expenses.js
│   │   └── debts.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── AddMember.jsx
│   │   │   ├── AddExpense.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── MemberView.jsx
│   │   │   └── Transactions.jsx
│   │   ├── App.jsx
│   │   ├── api.js
│   │   └── styles.css
│   └── package.json
│
└── README.md

