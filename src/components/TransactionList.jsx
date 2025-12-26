export default function TransactionList({
  transactions,
  deleteTransaction,
}) {
  return (
    <ul>
      {transactions.map((t) => (
        <li
          key={t.id}
          className={t.amount > 0 ? "income" : "expense"}
        >
          {t.text} — {t.amount}
          <button onClick={() => deleteTransaction(t.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
