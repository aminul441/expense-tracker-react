import { useState, useEffect } from "react";
import "./App.css";

import Balance from "./components/Balance";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

export default function App() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions"));
    if (saved) setTransactions(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = () => {
    if (text.trim() === "" || amount === "") return;

    setTransactions([
      ...transactions,
      {
        id: Date.now(),
        text,
        amount: Number(amount),
      },
    ]);

    setText("");
    setAmount("");
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((total, t) => total + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((total, t) => total + t.amount, 0);

  const balance = income + expense;

  return (
    <div className="app">
      <h1>Expense Tracker 💸</h1>

      <Balance balance={balance} />
      <Summary income={income} expense={expense} />

      <TransactionForm
        text={text}
        amount={amount}
        setText={setText}
        setAmount={setAmount}
        addTransaction={addTransaction}
      />

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}
