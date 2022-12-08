import PropTypes from 'prop-types';
import TransactionHistory from './TransactionHistory';
import {
  Table,
  Head,
  TrowHead,
  TableHeader,
} from './TransactionHistory.styled';

const TransactionHistoryTable = ({ items }) => {
  return (
    <Table className="transaction-history">
      <Head>
        <TrowHead>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TrowHead>
      </Head>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionHistory
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </Table>
  );
};

TransactionHistoryTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistoryTable;
