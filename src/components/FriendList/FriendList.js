import PropTypes from "prop-types";
import classes from "./FriendList.module.css";
import FriendListItem from '../FriendListItem/FriendListItem';
function FriendList({ friends }) {
  return (<ul className={classes.friend_list}>
    {friends.map(friend => {
      const { name, avatar, isOnline, id } = friend;
      return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
      );
    })}
  </ul>);
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;