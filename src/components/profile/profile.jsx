import PropTypes from 'prop-types';
import { FaSmile, FaThumbsUp, FaRegEye } from 'react-icons/fa';
import defaultImage from 'images/default_image.jpg';
import {
  UserProfile,
  UserDescription,
  UserInfo,
  UserName,
  Tag,
  Location,
  Stats,
  StatsList,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = props => {
  const {
    username,
    tag,
    location,
    avatar = defaultImage,
    followers,
    views,
    likes,
  } = props;

  return (
    <UserProfile>
      <UserDescription>
        <img src={avatar} alt={tag} />
        <UserInfo>
          <UserName>{username}</UserName>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </UserInfo>
      

      <Stats>
        <StatsList>
          <Label>
            <FaSmile /> followers
          </Label>
          <Quantity>{followers}</Quantity>
        </StatsList>
        <StatsList>
          <Label>
            <FaRegEye /> views
          </Label>
          <Quantity>{views}</Quantity>
        </StatsList>
        <StatsList>
          <Label>
            <FaThumbsUp /> likes
          </Label>
          <Quantity>{likes}</Quantity>
        </StatsList>
      </Stats>
      </UserDescription>
    </UserProfile>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
