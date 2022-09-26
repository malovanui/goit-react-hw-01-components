import user from '../../src/user.json';
import data from '../../src/data.json';
import friends from '../../src/friends.json';
import transactions from '../../src/transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/Transactions';

export const App = () => {
  return (
    <div>
      <Profile
        className="prof"
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory transactions={transactions}></TransactionHistory>
    </div>
  );
};
