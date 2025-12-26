export default function TransactionForm({
  text,
  amount,
  setText,
  setAmount,
  addTransaction,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount (+income, -expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addTransaction}>Add Transaction</button>
    </>
  );
}
