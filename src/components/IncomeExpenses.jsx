import { useGlobalState } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();
  const amouts = transactions.map((transaction) => transaction.amount);

  const income = amouts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amouts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);
  toFixed(2) * -1;

  return (
    <>
      <div>
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
