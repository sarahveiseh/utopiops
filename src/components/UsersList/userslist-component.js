import Card from "../Card/card-component";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/reducers/posts/postsActions";
import { setCurrentUser } from "../../store/reducers/users/usersActions";
import styles from "./userslist.module.css";
import Spinner from "../spinner/spinner-component";

const UsersList = ({ users = [], loading }) => {
  const dispatch = useDispatch();
  const currentCard = useSelector((state) => state.users.currentUserId);

  if (loading) return <Spinner />;
  return (
    <div className={styles.userlist}>
      {users.map((user) => (
        <Card
          text={`User ${user.id}`}
          selected={currentCard === user.id}
          onClick={() => {
            dispatch(getPosts(user.id));
            dispatch(setCurrentUser(user.id));
          }}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default UsersList;
