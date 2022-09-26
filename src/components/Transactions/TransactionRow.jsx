import PropTypes from 'prop-types';
import { TransactionItem, ItemData } from './TransactionRow.styled';

export const TransactionRow = ({ type, amount, currency }) => {
  return (
    <TransactionItem>
      <ItemData>{type}</ItemData>
      <ItemData>{amount}</ItemData>
      <ItemData>{currency}</ItemData>
    </TransactionItem>
  );
};

TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
