import Transaction from "../Transaction/Transaction";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <Transaction {...item} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
