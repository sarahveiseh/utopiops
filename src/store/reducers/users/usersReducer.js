import {
  GET_USERS_ERROR,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  SET_CURRENT_USER,
} from "./usersActionTypes";

const initialState = {
  usersList: {
    data: [],
    loading: false,
    error: false,
  },
  currentUserId: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        usersList: {
          data: action.payload,
          loading: false,
          error: false,
        },
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        usersList: {
          ...state.usersList,
          loading: false,
          error: true,
        },
      };
    case GET_USERS_LOADING:
      return {
        ...state,
        usersList: {
          ...state.usersList,
          loading: true,
          error: false,
        },
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUserId: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
