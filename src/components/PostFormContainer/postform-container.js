import { useSelector } from "react-redux";
import PostForm from "../PostForm/postform-component";
import Spinner from "../spinner/spinner-component";

const PostFormContainer = () => {
  const post = useSelector((state) => state.posts.currentPost);

  if (post.loading) return <Spinner />;
  return <PostForm data={post?.data} />;
};

export default PostFormContainer;
