import PostsList from "../../components/PostsList/postslist-component";
import { useSelector } from "react-redux";
import UsersList from "../../components/UsersList/userslist-component";

const MainPage = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className="main-page">
      <div className="users">
        <UsersList
          users={users.usersList.data}
          loading={users.usersList.loading}
        />
      </div>
      <div className="posts">
        <PostsList />
      </div>
    </div>
  );
};

export default MainPage;
