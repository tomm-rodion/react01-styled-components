import { MdAlternateEmail } from 'react-icons/md';
import PropTypes from 'prop-types';

import {
  ProfileWrapper,
  Description,
  Avatar,
  UserName,
  InfoUser,
  WrapperStats,
  WrapperItemStats,
  Quanteti,
} from './Profile.styled';

export const Profile = ({
  users: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <>
      <ProfileWrapper>
        <Description>
          <Avatar src={avatar} alt="User avatar" />
          <UserName>{username}</UserName>
          <InfoUser>
            <MdAlternateEmail />
            {tag}
          </InfoUser>
          <InfoUser>{location}</InfoUser>
        </Description>

        <WrapperStats>
          <WrapperItemStats>
            <Quanteti>Followers</Quanteti>
            <Quanteti> {followers}</Quanteti>
          </WrapperItemStats>
          <WrapperItemStats>
            <Quanteti>Views</Quanteti>
            <Quanteti> {views}</Quanteti>
          </WrapperItemStats>
          <WrapperItemStats>
            <Quanteti>Likes</Quanteti>
            <Quanteti> {likes}</Quanteti>
          </WrapperItemStats>
        </WrapperStats>
      </ProfileWrapper>
    </>
  );
};

Profile.propType = {
  users: PropTypes.objectOf({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
