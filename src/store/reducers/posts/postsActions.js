import axiosInstance from "../../../config/axios-config";
import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  UPDATE_POST_REQUEST,
  UPDATE_POST_FAIL,
  UPDATE_POST_SUCCESS,
  CLEAR_UPDATE_STATUS,
} from "./postsActionTypes";

const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

const getPostsFail = () => ({
  type: GET_POSTS_FAIL,
});

const getPostsSuccess = (payload) => ({
  type: GET_POSTS_SUCCESS,
  payload,
});

const getPostRequest = () => ({
  type: GET_POST_REQUEST,
});

const getPostFail = () => ({
  type: GET_POST_FAIL,
});

const getPostSuccess = (payload) => ({
  type: GET_POST_SUCCESS,
  payload,
});

const updatePostFail = () => ({
  type: UPDATE_POST_FAIL,
});

const updatePostSuccess = (payload) => ({
  type: UPDATE_POST_SUCCESS,
  payload,
});

const updatePostRequest = () => ({
  type: UPDATE_POST_REQUEST,
});

export const clearUpdateStatus = () => ({
  type: CLEAR_UPDATE_STATUS,
});

export const getPosts = (userId) => {
  return async (dispatch) => {
    dispatch(getPostsRequest());
    try {
      const response = await axiosInstance({
        method: "GET",
        url: "posts",
        params: {
          userId,
        },
      });
      dispatch(getPostsSuccess(response.data));
    } catch (e) {
      console.log(e);
      dispatch(getPostsFail());
    }
  };
};

export const getPost = (postId) => {
  return async (dispatch) => {
    dispatch(getPostRequest());
    try {
      const response = await axiosInstance({
        method: "GET",
        url: `/posts/${postId}`,
      });
      dispatch(getPostSuccess(response.data));
    } catch (e) {
      console.log(e);
      dispatch(getPostFail());
    }
  };
};

export const updatePost = (postId, title, body) => {
  return async (dispatch) => {
    dispatch(updatePostRequest());
    try {
      const response = await axiosInstance({
        method: "PUT",
        url: `/posts/${postId}`,
        data: {
          title,
          body,
        },
      });

      dispatch(updatePostSuccess(response.data));
    } catch (e) {
      console.log(e);
      dispatch(updatePostFail());
    }
  };
};
