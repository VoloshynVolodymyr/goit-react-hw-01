import PropTypes from 'prop-types';
import { TableBody, Tdata, TdataRow } from './TransactionHistory.styled';

const TransactionHistory = props => {
  const { type, amount, currency } = props;
  return (
    <TableBody>
      <TdataRow>
        <Tdata>{type}</Tdata>
        <Tdata>{amount}</Tdata>
        <Tdata>{currency}</Tdata>
      </TdataRow>
    </TableBody>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
