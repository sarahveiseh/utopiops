import { combineReducers } from "redux";
import postsReducer from "./posts/postsReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export default rootReducer;
