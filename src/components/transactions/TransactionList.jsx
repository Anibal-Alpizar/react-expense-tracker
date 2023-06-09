import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

function TransactionList() {
  const { transactions } = useGlobalState();

  return (
    <>
      <h3 className="to-slate-300 text-xl font-black block w-full">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
