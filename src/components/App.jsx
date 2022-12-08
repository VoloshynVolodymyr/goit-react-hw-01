import Profile from "./profile/profile";
import StatisticsList from './statistics/statisticsList';
import FriendList from './friends/FriendList';
import TransactionHistoryTable from "./transactions/TransactionHistoryTable";
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

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
