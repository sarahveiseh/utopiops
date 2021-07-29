import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Card from "../Card/card-component";
import Spinner from "../spinner/spinner-component";
import styles from "./postslist.module.css";

const PostsList = () => {
  const posts = useSelector((state) => state.posts.postsList);
  const currentUser = useSelector((state) => state.users.currentUserId);
  const history = useHistory();
  if (posts.loading) return <Spinner />;
  return (
    <>
      <div className={styles.postlist}>
        {currentUser && (
          <div className={styles.userCard}>
            <Card text={`User ${currentUser} posts`} />
          </div>
        )}
        <div className={styles.posts}>
          {posts.data?.map((post) => (
            <Card
              text={post.title}
              key={post.id}
              onClick={() => history.push(`/posts/${post.id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostsList;
