import PropTypes from 'prop-types';
import {
  FriendListItem,
  ItemStatus,
  ItemAvatar,
  ItemName,
} from './FriendItem.styled';

export const FriendItem = ({ avatar, name, status }) => {
  return (
    <FriendListItem>
      <ItemStatus status={status}></ItemStatus>
      <ItemAvatar src={avatar} alt="User avatar" width="48" />
      <ItemName>{name}</ItemName>
    </FriendListItem>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
