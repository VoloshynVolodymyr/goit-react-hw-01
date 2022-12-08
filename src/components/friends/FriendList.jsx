import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendBox } from './FriendListItem.styled';

const FriendList = ({ items }) => {
  return (
    <FriendBox>
      {items.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendBox>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
