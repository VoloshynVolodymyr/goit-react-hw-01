import PropTypes from 'prop-types';
import checkOnline from 'Utils/checkOnline';
import { Check, Item, Status, Name } from './FriendListItem.styled';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <Item isOnline={isOnline}>
      <Check isOnline={isOnline}>{checkOnline(isOnline)}</Check>
      <Status>{`${isOnline}`}</Status>
      <img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
