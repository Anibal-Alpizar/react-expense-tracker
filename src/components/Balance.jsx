import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();
  const amouts = transactions.map((transaction) => transaction.amount);
  const total = amouts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="flex justify-between">
      <h3>Your Balance</h3>
      <h1 className="text-2xl font-bold">${total}</h1>
    </div>
  );
}

export default Balance;
