import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import { getPost } from "../../store/reducers/posts/postsActions";
import PostFormContainer from "../../components/PostFormContainer/postform-container";

const PostPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    //get users list on app start
    dispatch(getPost(id));
  }, [dispatch, id]);

  return (
    <div className="post-form">
      <PostFormContainer />
    </div>
  );
};

export default PostPage;
