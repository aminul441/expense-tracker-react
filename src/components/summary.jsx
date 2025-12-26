export default function Summary({ income, expense }) {
  return (
    <div className="summary">
      <div className="income-box">
        <h3>Income</h3>
        <p>${income}</p>
      </div>

      <div className="expense-box">
        <h3>Expense</h3>
        <p>${Math.abs(expense)}</p>
      </div>
    </div>
  );
}
