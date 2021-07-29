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

const initialState = {
  postsList: {
    data: [],
    loading: false,
    error: false,
  },
  currentPost: {
    data: null,
    loading: false,
    error: false,
  },
  postUpdate: {
    success: false,
    loading: false,
    error: false,
  },
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        postsList: {
          data: action.payload,
          loading: false,
          error: false,
        },
      };
    case GET_POSTS_REQUEST:
      return {
        ...state,
        postsList: {
          ...state.postsList,
          loading: true,
          error: false,
        },
      };
    case GET_POSTS_FAIL:
      return {
        ...state,
        postsList: {
          ...state.postsList,
          loading: false,
          error: true,
        },
      };
    case GET_POST_FAIL:
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          loading: false,
          error: true,
        },
      };
    case GET_POST_REQUEST:
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          loading: true,
          error: false,
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        currentPost: {
          data: action.payload,
          loading: false,
          error: false,
        },
      };
    case UPDATE_POST_REQUEST:
      return {
        ...state,
        postUpdate: {
          loading: true,
          error: false,
          success: false,
        },
      };
    case UPDATE_POST_FAIL:
      return {
        ...state,
        postUpdate: {
          loading: false,
          error: true,
          success: false,
        },
      };
    case UPDATE_POST_SUCCESS:
      const newData = [...state.postsList.data];
      const findIndex = newData.findIndex((i) => i.id === action.payload.id);
      newData[findIndex] = action.payload;
      return {
        ...state,
        postUpdate: {
          loading: false,
          error: false,
          success: true,
        },
        postsList: {
          data: newData,
          loading: false,
          error: false,
        },
      };
    case CLEAR_UPDATE_STATUS:
      return {
        ...state,
        postUpdate: {
          success: false,
          loading: false,
          error: false,
        },
      };
    default:
      return state;
  }
};

export default postsReducer;
