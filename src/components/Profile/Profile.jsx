import PropTypes from 'prop-types';
import {
  UserCard,
  UserImg,
  UserDescription,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsItem,
  StatsName,
  StatsNum,
} from 'components/Profile/profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserCard>
      <UserDescription>
        <UserImg
          src={avatar}
          alt="User avatar"
          className="avatar"
          width="90px"
        />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserStats>
        <UserStatsItem>
          <StatsName>Followers</StatsName>
          <StatsNum>{stats.followers}</StatsNum>
        </UserStatsItem>
        <UserStatsItem>
          <StatsName>Views</StatsName>
          <StatsNum>{stats.views}</StatsNum>
        </UserStatsItem>
        <UserStatsItem>
          <StatsName>Likes</StatsName>
          <StatsNum>{stats.likes}</StatsNum>
        </UserStatsItem>
      </UserStats>
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
