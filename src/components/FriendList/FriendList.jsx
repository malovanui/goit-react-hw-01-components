import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem
            avatar={avatar}
            name={name}
            status={isOnline}
            key={id}
          ></FriendItem>
        );
      })}
    </FriendsList>
  );
};
