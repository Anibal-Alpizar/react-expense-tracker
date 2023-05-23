import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();
  const amouts = transactions.map((transaction) => transaction.amount);
  const total = amouts.reduce((acc, item) => (acc += item), 0);
  return (
    <div>
      <h3>Your Balance</h3>
      <h1>${total}</h1>
    </div>
  );
}

export default Balance;
