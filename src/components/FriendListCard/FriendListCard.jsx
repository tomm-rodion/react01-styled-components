import {
  List,
  IsOnlineFriend,
  Avatar,
  NemeFriend,
} from './FriendListCard.styled';

import PropTypes from 'prop-types';

export const FriendListCard = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <List>
      <IsOnlineFriend isOnline={isOnline}></IsOnlineFriend>
      <Avatar src={avatar} alt={name} width="48" />
      <NemeFriend>{name}</NemeFriend>
    </List>
  );
};

FriendListCard.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
