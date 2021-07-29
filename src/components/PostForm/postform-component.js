import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";
import {
  updatePost,
  clearUpdateStatus,
} from "../../store/reducers/posts/postsActions";
import styles from "./postform.module.css";
import Notify from "../Notify/notify-component";

const PostForm = ({ data }) => {
  const update = useSelector((state) => state.posts.postUpdate);
  const [title, setTitle] = useState(data?.title);
  const [body, setBody] = useState(data?.body);
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const errors = [];
    if (!body) errors.push("Body is required!");
    if (!title) errors.push("Title is required!");

    if (errors.length) {
      errors.forEach((error) => alert(error));
      return;
    }
    dispatch(updatePost(data?.id, title, body));
  };
  return (
    <>
      {update.success && (
        <Notify
          color="green"
          text="successful"
          action={() => {
            dispatch(clearUpdateStatus());
            history.push("/");
          }}
        />
      )}
      {update.error && (
        <Notify
          color="red"
          text="failed"
          action={() => {
            dispatch(clearUpdateStatus());
          }}
        />
      )}
      <form>
        <fieldset>
          <legend>Title</legend>
          <textarea
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            rows={3}
          />
        </fieldset>
        <span className={styles.required}>*required</span>
        <fieldset className={styles.bodyFieldset}>
          <legend>Body</legend>
          <textarea
            name="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            rows={12}
          ></textarea>
        </fieldset>
        <span className={styles.required}>*required</span>
        <div className={styles.buttons}>
          <button onClick={() => history.push("/")}>CANCEL</button>
          <button onClick={onSubmit}>
            {update.loading ? "SAVING..." : "SAVE"}
          </button>
        </div>
      </form>
    </>
  );
};

export default PostForm;
