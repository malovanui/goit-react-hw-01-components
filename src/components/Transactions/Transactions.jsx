import PropTypes from 'prop-types';
import { TransactionRow } from './TransactionRow';
import {
  TransactionTable,
  TransactionHead,
  HeadRow,
  HeadTitle,
  TransactionBody,
} from './Transactions.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TransactionHead>
        <HeadRow>
          <HeadTitle>Type</HeadTitle>
          <HeadTitle>Amount</HeadTitle>
          <HeadTitle>Currency</HeadTitle>
        </HeadRow>
      </TransactionHead>
      {transactions.map(transaction => (
        <TransactionBody key={transaction.id}>
          <TransactionRow
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          ></TransactionRow>
        </TransactionBody>
      ))}
    </TransactionTable>
  );
};

TransactionHistory.prototypeTypes = {
  transaction: PropTypes.object,
};
