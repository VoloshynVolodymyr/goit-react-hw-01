import Profile from './profile/profile';
import StatisticsList from './statistics/StatisticsList';
import FriendList from './friends/FriendList';
import TransactionHistoryTable from "./transactions/TransactionHistoryTable";
import user from '../data/user.json'
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
      key={1}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar ={user.avatar}
      followers = {user.stats.followers}
      views = {user.stats.views}
      likes = {user.stats.likes}
      />
   <StatisticsList items={data}/>
   <FriendList items={friends}/>
   <TransactionHistoryTable items={transactions}/>
   
    </div>
  );
};
