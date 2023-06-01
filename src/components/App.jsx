import friends from './data/friends.json';
import users from './data/user.json';
import data from './data/data.json';
import transactics from './data/transactions';

import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Transactics } from './Transactics/Transactics';

export const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        columnGap: '50px',
        gridTemplateColumns: 'row-gap',
        rowGap: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FriendList friends={friends} />
      <Profile users={users} />
      <Statistics title="Upload stats" statis={data} />
      <Transactics transactics={transactics} />
    </div>
  );
};
